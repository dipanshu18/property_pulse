"use client";

export default function AddPropertyForm() {
  return (
    <form className="max-w-3xl mx-auto p-10 m-10 bg-base-300 space-y-5">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Property Type</span>
        </label>
        <select className="select select-bordered w-full">
          <option value="apartment">Apartment</option>
          <option value="condo">Condo</option>
          <option value="house">House</option>
          <option value="room">Room</option>
          <option value="studio">Studio</option>
        </select>
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Listing Name</span>
        </label>
        <input
          type="text"
          placeholder="Enter name"
          className="input input-bordered"
          required
        />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Description</span>
        </label>
        <textarea
          placeholder="Enter description"
          rows={4}
          className="textarea textarea-bordered"
          required
        />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Location</span>
        </label>
        <div className="grid gap-4">
          <input
            type="text"
            placeholder="Street"
            className="input input-bordered w-full"
            required
          />
          <input
            type="text"
            placeholder="City"
            className="input input-bordered w-full"
            required
          />
          <input
            type="text"
            placeholder="State"
            className="input input-bordered w-full"
            required
          />
          <input
            type="text"
            placeholder="Zipcode"
            className="input input-bordered w-full"
            required
          />
        </div>
      </div>

      <div className="form-control">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
          <span>
            <label className="label">
              <span className="label-text">Beds</span>
            </label>
            <input
              type="text"
              placeholder=""
              className="input input-bordered w-full"
              required
            />
          </span>

          <span>
            <label className="label">
              <span className="label-text">Baths</span>
            </label>
            <input
              type="text"
              placeholder=""
              className="input input-bordered w-full"
              required
            />
          </span>

          <span>
            <label className="label">
              <span className="label-text">Area (sqft)</span>
            </label>
            <input
              type="text"
              placeholder=""
              className="input input-bordered w-full"
              required
            />
          </span>
        </div>
      </div>

      <div className="form-control grid grid-cols-3 gap-2">
        <div className="flex items-center gap-2">
          <input type="checkbox" className="checkbox" />
          <label>Wifi</label>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" className="checkbox" />
          <label>Full Kitchen</label>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" className="checkbox" />
          <label>Washer & Dryer</label>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" className="checkbox" />
          <label>Free Parking</label>
        </div>

        <div className="flex items-center gap-2">
          <input type="checkbox" className="checkbox" />
          <label>Swimming Pool</label>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" className="checkbox" />
          <label>Hot tub</label>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" className="checkbox" />
          <label>24/7 Security</label>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" className="checkbox" />
          <label>Elevator Access</label>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" className="checkbox" />
          <label>Air Conditioning</label>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" className="checkbox" />
          <label>Coffee maker</label>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" className="checkbox" />
          <label>TV</label>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" className="checkbox" />
          <label>Balcony</label>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" className="checkbox" />
          <label>Gym</label>
        </div>
      </div>

      <div className="form-control">
        <label>Rates (Leave blank if not applicable)</label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
          <span>
            <label className="label">
              <span className="label-text">Weekly</span>
            </label>
            <input
              type="text"
              placeholder=""
              className="input input-bordered w-full"
              required
            />
          </span>

          <span>
            <label className="label">
              <span className="label-text">Monthly</span>
            </label>
            <input
              type="text"
              placeholder=""
              className="input input-bordered w-full"
              required
            />
          </span>

          <span>
            <label className="label">
              <span className="label-text">Yearly</span>
            </label>
            <input
              type="text"
              placeholder=""
              className="input input-bordered w-full"
              required
            />
          </span>
        </div>
      </div>

      <div className="form-control">
        <label>Images (Select upto 4)</label>
        <input
          type="file"
          multiple
          accept="image/*"
          className="file-input file-input-bordered w-full"
        />
      </div>

      <div className="form-control mt-5">
        <button className="btn btn-primary w-full">Add Property</button>
      </div>
    </form>
  );
}
