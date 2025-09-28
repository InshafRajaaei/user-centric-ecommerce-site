import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import userModel from '../../models/userModel.js'; 
import { updateCart } from '../../controllers/cartController.js';

let mockRequest, mockResponse;
let actualCartData;

Given('I am a logged-in user with ID {string}', function (userId) {
  mockRequest = { body: { userId: userId } };
});

Given(
  'my cart contains {int} unit of product {string} in size {string}',
  function (initialQty, itemId, size) {
    // Mock the userModel methods to simulate database behavior
    userModel.findById = async (id) => {
      return {
        cartData: { [itemId]: { [size]: initialQty } },
      };
    };

    userModel.findByIdAndUpdate = async (id, update) => {
      actualCartData = update.cartData; // Capture the updated cart for assertion
      return {};
    };
  }
);

When(
  'I update the quantity of product {string} in size {string} to {int}',
  async function (itemId, size, newQty) {
    mockRequest.body.itemId = itemId;
    mockRequest.body.size = size;
    mockRequest.body.quantity = newQty;

    mockResponse = {
      json: (response) => (this.lastResponse = response),
      status: (code) => {
        this.statusCode = code;
        return mockResponse;
      },
    };

    await updateCart(mockRequest, mockResponse);
  }
);

Then(
  'my cart should contain {int} units of product {string} in size {string}',
  function (expectedQty, itemId, size) {
    // Check the data that was passed to findByIdAndUpdate
    expect(actualCartData[itemId][size]).to.equal(expectedQty);
  }
);

Then('I should receive a confirmation message', function () {
  expect(this.lastResponse).to.deep.equal({
    success: true,
    message: 'Cart Updated',
  });
});