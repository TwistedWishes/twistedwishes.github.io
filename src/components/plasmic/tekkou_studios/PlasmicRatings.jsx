// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: pxrbsjdrcYiKeJrrydSqC9
// Component: hkLb2r8c9IygmP
import * as React from "react";
import {
  Stack as Stack__,
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
import * as sty from "./PlasmicRatings.module.css"; // plasmic-import: hkLb2r8c9IygmP/css
import StarIcon from "./icons/PlasmicIcon__Star"; // plasmic-import: jTGdRMXs1nMrEq/icon

createPlasmicElementProxy;

export const PlasmicRatings__VariantProps = new Array("stars");

export const PlasmicRatings__ArgProps = new Array("numReviews");

const $$ = {};

function PlasmicRatings__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
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
        path: "stars",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.stars
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
    <Stack__
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_library_plasmic_color_type_css.plasmic_tokens,
        sty.root,
        {
          [sty.rootstars_five]: hasVariant($state, "stars", "five"),
          [sty.rootstars_four]: hasVariant($state, "stars", "four"),
          [sty.rootstars_one]: hasVariant($state, "stars", "one"),
          [sty.rootstars_three]: hasVariant($state, "stars", "three"),
          [sty.rootstars_two]: hasVariant($state, "stars", "two"),
          [sty.rootstars_zero]: hasVariant($state, "stars", "zero")
        }
      )}
    >
      <Stack__
        as={"div"}
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <StarIcon
          className={classNames(projectcss.all, sty.svg__ojgIx, {
            [sty.svgstars_five__ojgIxJcEsp]: hasVariant(
              $state,
              "stars",
              "five"
            ),
            [sty.svgstars_zero__ojgIxT2Mqn]: hasVariant($state, "stars", "zero")
          })}
          role={"img"}
        />

        <StarIcon
          className={classNames(projectcss.all, sty.svg___1XxlW, {
            [sty.svgstars_five___1XxlWJcEsp]: hasVariant(
              $state,
              "stars",
              "five"
            ),
            [sty.svgstars_four___1XxlWEk6A5]: hasVariant(
              $state,
              "stars",
              "four"
            ),
            [sty.svgstars_one___1XxlWWv88O]: hasVariant($state, "stars", "one"),
            [sty.svgstars_three___1XxlWqi7S]: hasVariant(
              $state,
              "stars",
              "three"
            ),
            [sty.svgstars_two___1XxlWk32Ll]: hasVariant($state, "stars", "two"),
            [sty.svgstars_zero___1XxlWt2Mqn]: hasVariant(
              $state,
              "stars",
              "zero"
            )
          })}
          role={"img"}
        />

        <StarIcon
          className={classNames(projectcss.all, sty.svg__ziHdl, {
            [sty.svgstars_five__ziHdlJcEsp]: hasVariant(
              $state,
              "stars",
              "five"
            ),
            [sty.svgstars_four__ziHdlEk6A5]: hasVariant(
              $state,
              "stars",
              "four"
            ),
            [sty.svgstars_one__ziHdlWv88O]: hasVariant($state, "stars", "one"),
            [sty.svgstars_three__ziHdlQi7S]: hasVariant(
              $state,
              "stars",
              "three"
            ),
            [sty.svgstars_two__ziHdlk32Ll]: hasVariant($state, "stars", "two"),
            [sty.svgstars_zero__ziHdlT2Mqn]: hasVariant($state, "stars", "zero")
          })}
          role={"img"}
        />

        <StarIcon
          className={classNames(projectcss.all, sty.svg__wtWus, {
            [sty.svgstars_five__wtWusJcEsp]: hasVariant(
              $state,
              "stars",
              "five"
            ),
            [sty.svgstars_four__wtWusEk6A5]: hasVariant(
              $state,
              "stars",
              "four"
            ),
            [sty.svgstars_one__wtWusWv88O]: hasVariant($state, "stars", "one"),
            [sty.svgstars_three__wtWusQi7S]: hasVariant(
              $state,
              "stars",
              "three"
            ),
            [sty.svgstars_two__wtWusk32Ll]: hasVariant($state, "stars", "two"),
            [sty.svgstars_zero__wtWusT2Mqn]: hasVariant($state, "stars", "zero")
          })}
          role={"img"}
        />

        <StarIcon
          className={classNames(projectcss.all, sty.svg__ozNmu, {
            [sty.svgstars_five__ozNmuJcEsp]: hasVariant(
              $state,
              "stars",
              "five"
            ),
            [sty.svgstars_four__ozNmuEk6A5]: hasVariant(
              $state,
              "stars",
              "four"
            ),
            [sty.svgstars_one__ozNmuWv88O]: hasVariant($state, "stars", "one"),
            [sty.svgstars_three__ozNmuQi7S]: hasVariant(
              $state,
              "stars",
              "three"
            ),
            [sty.svgstars_two__ozNmuk32Ll]: hasVariant($state, "stars", "two"),
            [sty.svgstars_zero__ozNmuT2Mqn]: hasVariant($state, "stars", "zero")
          })}
          role={"img"}
        />

        <StarIcon
          className={classNames(projectcss.all, sty.svg__fwLo, {
            [sty.svgstars_five__fwLoJcEsp]: hasVariant($state, "stars", "five"),
            [sty.svgstars_four__fwLoEk6A5]: hasVariant($state, "stars", "four"),
            [sty.svgstars_one__fwLoWv88O]: hasVariant($state, "stars", "one"),
            [sty.svgstars_three__fwLoQi7S]: hasVariant(
              $state,
              "stars",
              "three"
            ),
            [sty.svgstars_two__fwLok32Ll]: hasVariant($state, "stars", "two"),
            [sty.svgstars_zero__fwLoT2Mqn]: hasVariant($state, "stars", "zero")
          })}
          role={"img"}
        />

        <StarIcon
          className={classNames(projectcss.all, sty.svg__h9Nk5, {
            [sty.svgstars_five__h9Nk5JcEsp]: hasVariant(
              $state,
              "stars",
              "five"
            ),
            [sty.svgstars_four__h9Nk5Ek6A5]: hasVariant(
              $state,
              "stars",
              "four"
            ),
            [sty.svgstars_three__h9Nk5Qi7S]: hasVariant(
              $state,
              "stars",
              "three"
            ),
            [sty.svgstars_two__h9Nk5K32Ll]: hasVariant($state, "stars", "two")
          })}
          role={"img"}
        />

        <StarIcon
          className={classNames(projectcss.all, sty.svg__bXfmj, {
            [sty.svgstars_five__bXfmjJcEsp]: hasVariant(
              $state,
              "stars",
              "five"
            ),
            [sty.svgstars_four__bXfmjEk6A5]: hasVariant(
              $state,
              "stars",
              "four"
            ),
            [sty.svgstars_three__bXfmjQi7S]: hasVariant(
              $state,
              "stars",
              "three"
            )
          })}
          role={"img"}
        />

        <StarIcon
          className={classNames(projectcss.all, sty.svg__plcfq, {
            [sty.svgstars_five__plcfqJcEsp]: hasVariant(
              $state,
              "stars",
              "five"
            ),
            [sty.svgstars_four__plcfqEk6A5]: hasVariant($state, "stars", "four")
          })}
          role={"img"}
        />

        <StarIcon
          className={classNames(projectcss.all, sty.svg__lcoWa, {
            [sty.svgstars_five__lcoWaJcEsp]: hasVariant($state, "stars", "five")
          })}
          role={"img"}
        />
      </Stack__>
      {renderPlasmicSlot({
        defaultContents: "(45 Review)",
        value: args.numReviews,
        className: classNames(sty.slotTargetNumReviews)
      })}
    </Stack__>
  );
}

const PlasmicDescendants = {
  root: ["root", "freeBox"],
  freeBox: ["freeBox"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicRatings__ArgProps,
          internalVariantPropNames: PlasmicRatings__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicRatings__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicRatings";
  } else {
    func.displayName = `PlasmicRatings.${nodeName}`;
  }
  return func;
}

export const PlasmicRatings = Object.assign(
  // Top-level PlasmicRatings renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    // Metadata about props expected for PlasmicRatings
    internalVariantProps: PlasmicRatings__VariantProps,
    internalArgProps: PlasmicRatings__ArgProps
  }
);

export default PlasmicRatings;
/* prettier-ignore-end */
