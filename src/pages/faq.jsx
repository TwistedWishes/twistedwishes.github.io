// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import * as ph from "@plasmicapp/react-web/lib/host";
import {
  PlasmicFaq,
  Head
} from "../components/plasmic/tekkou_studios/PlasmicFaq";

export { Head };

function Faq({ location, path, params }) {
  // Use PlasmicFaq to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicFaq are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, PlasmicFaq is wrapped by your project's global
  // variant context providers. These wrappers may be moved to
  // Gatsby "wrapRootElement" function
  // (https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr#wrapRootElement).
  return (
    <ph.PageParamsProvider
      route={path}
      params={params}
      query={Object.fromEntries(new URLSearchParams(location.search))}
    >
      <PlasmicFaq />
    </ph.PageParamsProvider>
  );
}

export default Faq;
