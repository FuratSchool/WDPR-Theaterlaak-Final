import React, { Component } from "react";
import { FooterMenu } from "./FooterMenu";
import "./css/style.css";

export class Footer extends Component {
  static displayName = Footer.name;
  render() {
    return (
      <footer className="border-top py-3">
        <div className="container">
          <div className="row">
            <div className="col mb-6">
              <p className="text-muted">Test 2022</p>
            </div>

            <div className="col mb-6">
              <div className="row">
                <FooterMenu />
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
