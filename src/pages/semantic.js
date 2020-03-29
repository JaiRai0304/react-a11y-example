import React from "react";
import Tablebody from "../components/tablebody";
import Tableheader from "../components/tableheader";
import Tableheaderfrag from "../components/tableheaderfrag";
import Tablebodyfrag from "../components/tablebodyfrag";
import Customtag from "../components/customtag";
import DocumentTitle from "react-document-title";

const Semantic = () => (
  <DocumentTitle title="Title Fixed">
    <div>
      <h1>Keyboard Navigation</h1>
      <h2>Extra Divs Added</h2>
      <p>
        In this example below, a component is created with data being added to a
        table,however the data has a wrapper div that can break the semantics of
        the overall table.
      </p>
      <table>
        <tr>
          <Tableheader />
        </tr>
        <tr>
          <Tablebody />
        </tr>
      </table>
      <h2>Fragments</h2>
      <p>
        In this example below, a component is created with data being added to a
        table,however instead we use Fragments to now let the natural semantics
        be placed on the page.{" "}
      </p>
      <table>
        <tr>
          <Tableheaderfrag />
        </tr>
        <tr>
          <Tablebodyfrag />
        </tr>
      </table>
      <h2>Custom Tags</h2>
      <p>
        In this example below, a button is created using non native semantics
        and native semantics. With custom tags, users like to add a role of
        button and tabindex after the fact, however it does not render in react.{" "}
      </p>
      <Customtag />
      <div className="btn btn-primary btn-large">Click me!</div>
      <button className="btn btn-primary btn-large">Click me!</button>
    </div>
  </DocumentTitle>
);
export default Semantic;
