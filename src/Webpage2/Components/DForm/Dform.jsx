import React from 'react'
import "./Dform.css"

export default function Dform() {
  return (
    <div class="container">
        <div class="title">Product Details</div>
         <div class="content">
             <form action="#">
                <div class="user-details">
                    <div class="input-box">
                        <span class="details">Full Name</span>
                        <input type="text" placeholder="Enter your name" required />
                    </div>
                    <div class="input-box">
                        <span class="details">Product Name</span>
                        <input type="text" placeholder="Enter product name" required />
                    </div>
                    <div class="input-box">
                        <span class="details">Price</span>
                        <input type="text" placeholder="Price in RS" required />
                    </div>
                    <div class="input-box">
                        <span class="details">Date</span>
                        <input type="date" placeholder="Entry Date" required />
                    </div>
                    <div class="input-box">
                        <span class="details">Grade</span>
                        <input type="text" placeholder="Out of 10." required />
                    </div>
                    <div class="input-box">
                        <span class="details">Details</span>
                        <input type="text" placeholder="Description" required />
                    </div>
                </div>
                <div class="Category-details">
                <input type="radio" name="Category" id="dot-1" />
                <input type="radio" name="Category" id="dot-2" />
                <input type="radio" name="Category" id="dot-3" />
                <input type="radio" name="Category" id="dot-4" />
                <span class="Category-title">Category</span>
                <div class="category">
                    <label for="dot-1">
                    <span class="dot one"></span>
                    <span class="Category">Vegetable</span>
                </label>
                <label for="dot-2">
                    <span class="dot two"></span>
                    <span class="Category">Fruits</span>
                </label>
                <label for="dot-3">
                    <span class="dot three"></span>
                    <span class="Category">Dairy</span>
                    </label>
                <label for="dot-4">
                    <span class="dot four"></span>
                    <span class="Category">Rice</span>
                </label>
                </div>
        </div>
        <div class="button">
          <input type="submit" value="Register" />
        </div>
      </form>
    </div>
  </div>
  )
}
