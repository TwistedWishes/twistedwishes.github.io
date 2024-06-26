// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: pxrbsjdrcYiKeJrrydSqC9
// Component: tu-boLyMtFKrN1
import * as React from "react";
import { Link } from "gatsby";
import {
  PlasmicLink as PlasmicLink__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  hasVariant,
  renderPlasmicSlot,
  useDollarState
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import * as projectcss from "./plasmic_tekkou_studios.module.css"; // plasmic-import: pxrbsjdrcYiKeJrrydSqC9/projectcss
import * as sty from "./PlasmicLinkButton.module.css"; // plasmic-import: tu-boLyMtFKrN1/css

createPlasmicElementProxy;

export const PlasmicLinkButton__VariantProps = new Array("type", "size");

export const PlasmicLinkButton__ArgProps = new Array("href", "text");

const $$ = {};

function PlasmicLinkButton__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(
    () =>
      Object.assign(
        {
          href: "#"
        },
        props.args
      ),
    [props.args]
  );
  const $props = {
    ...args,
    ...variants
  };
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "type",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.type
      },
      {
        path: "size",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.size
      }
    ],

    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });
  return (
    <PlasmicLink__
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.a,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_library_plasmic_color_type_css.plasmic_tokens,
        sty.root,
        {
          [sty.rootsize_small]: hasVariant($state, "size", "small"),
          [sty.roottype_blankGray]: hasVariant($state, "type", "blankGray"),
          [sty.roottype_blankOrange]: hasVariant($state, "type", "blankOrange"),
          [sty.roottype_outlineGray]: hasVariant($state, "type", "outlineGray"),
          [sty.roottype_solidGray]: hasVariant($state, "type", "solidGray"),
          [sty.roottype_solidOrange]: hasVariant($state, "type", "solidOrange")
        }
      )}
      component={Link}
      href={args.href}
      platform={"gatsby"}
    >
      {renderPlasmicSlot({
        defaultContents: "Do the thing",
        value: args.text,
        className: classNames(sty.slotTargetText, {
          [sty.slotTargetTexttype_blankGray]: hasVariant(
            $state,
            "type",
            "blankGray"
          ),
          [sty.slotTargetTexttype_blankOrange]: hasVariant(
            $state,
            "type",
            "blankOrange"
          ),
          [sty.slotTargetTexttype_outlineGray]: hasVariant(
            $state,
            "type",
            "outlineGray"
          ),
          [sty.slotTargetTexttype_solidGray]: hasVariant(
            $state,
            "type",
            "solidGray"
          ),
          [sty.slotTargetTexttype_solidOrange]: hasVariant(
            $state,
            "type",
            "solidOrange"
          )
        })
      })}
    </PlasmicLink__>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicLinkButton__ArgProps,
          internalVariantPropNames: PlasmicLinkButton__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicLinkButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLinkButton";
  } else {
    func.displayName = `PlasmicLinkButton.${nodeName}`;
  }
  return func;
}

export const PlasmicLinkButton = Object.assign(
  // Top-level PlasmicLinkButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicLinkButton
    internalVariantProps: PlasmicLinkButton__VariantProps,
    internalArgProps: PlasmicLinkButton__ArgProps
  }
);

export default PlasmicLinkButton;
/* prettier-ignore-end */
