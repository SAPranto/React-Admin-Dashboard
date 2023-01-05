/* eslint-disable */
import React from "react";

const AddProduct = () => (
  <div className="flex items-center justify-center p-12">
    <div className="mx-auto w-full max-w-[550px] bg-white">
      <form
        className="py-6 px-9"
        action="https://formbold.com/s/FORM_ID"
        method="POST"
      >
        <div className="mb-5">
          <label
            for="name"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Product Title
          </label>
          <input
            type="name"
            name="name"
            id="name"
            placeholder="Adidas Treziod"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div className="mb-5">
          <label
            for="number"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Product Price
          </label>
          <input
            type="number"
            name="number"
            id="number"
            placeholder="1200৳"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <label
            for="name"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Choose Category
          </label>
        <legend className="sr-only">Category</legend>
        <div className="flex items-center mb-4">
    <input id="category1" type="radio" name="category" value="Shoe" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600 cursor-pointer" checked/>
    <label for="category1" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
      Shoe
    </label>
        </div>

        <div className="flex items-center mb-4">
    <input id="category2" type="radio" name="category" value="Phone" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600 cursor-pointer"/>
    <label for="category2" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 ">
      Phone
    </label>
  </div>

  <div className="flex items-center mb-4">
    <input id="category3" type="radio" name="category" value="Bag" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600 cursor-pointer"/>
    <label for="category3" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
      Bag
    </label>
  </div>

        <label
            for="message"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Product Description
          </label>
        <textarea
          id="message"
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter Product Description..."
        ></textarea>

        

        <div className="mb-6 pt-4">
          <label className="mb-5 block text-xl font-semibold text-[#07074D]">
            Upload Product Image
          </label>

          <div className="mb-8">
            <input type="file" name="file" id="file" className="sr-only" />
            <label
              for="file"
              className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
            >
              <div>
                <span className="mb-2 block text-xl font-semibold text-[#07074D]">
                  Drop files here
                </span>
                <span className="mb-2 block text-base font-medium text-[#6B7280]">
                  Or
                </span>
                <span className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D] cursor-pointer">
                  Browse Product
                </span>
              </div>
            </label>
          </div>
        </div>
        <div>
          <button className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
            Add Product
          </button>
        </div>
      </form>
    </div>
  </div>
);

export default AddProduct;
