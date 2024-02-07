import React from "react";
import reactLogo from "./assets/react.svg";

export default function first() {
  return (
    <>
      <main className="container py-5">
        <div className="d-flex justify-content-between align-items-center">
          <div className="text-center">
            <h1>Your Name</h1>
            <p>Your Profession</p>
          </div>
          <div>
            <img src={reactLogo} alt="" height="200px" width="200px" />
          </div>
        </div>
      </main>

      <section className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">Title</h2>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam molestias saepe illo nam quaerat dolorum nostrum
                  soluta assumenda dignissimos distinctio, expedita minus totam
                  accusamus iste quasi similique tenetur numquam eos.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">Title</h2>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam molestias saepe illo nam quaerat dolorum nostrum
                  soluta assumenda dignissimos distinctio, expedita minus totam
                  accusamus iste quasi similique tenetur numquam eos.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">Title</h2>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam molestias saepe illo nam quaerat dolorum nostrum
                  soluta assumenda dignissimos distinctio, expedita minus totam
                  accusamus iste quasi similique tenetur numquam eos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
