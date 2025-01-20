// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: pxrbsjdrcYiKeJrrydSqC9
// Component: m9xraW-kpySFIb
import * as React from "react";
import {
  PlasmicImg as PlasmicImg__,
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  hasVariant,
  renderPlasmicSlot,
  useDollarState,
  useTrigger
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import Ratings from "../../Ratings"; // plasmic-import: hkLb2r8c9IygmP/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import * as projectcss from "./plasmic_tekkou_studios.module.css"; // plasmic-import: pxrbsjdrcYiKeJrrydSqC9/projectcss
import * as sty from "./PlasmicProductCard.module.css"; // plasmic-import: m9xraW-kpySFIb/css
import ShoppingCartIcon from "./icons/PlasmicIcon__ShoppingCart"; // plasmic-import: AuSpZZwEGypwrX/icon
import HeartOIcon from "./icons/PlasmicIcon__HeartO"; // plasmic-import: hYCIyKspFIzpFa/icon
import ExpandIcon from "./icons/PlasmicIcon__Expand"; // plasmic-import: 0HqRSH23PloC57/icon
import f1LjjptYHBvqm2 from "./images/f1.jpg"; // plasmic-import: Ljjpt--yHBvqm2/picture

createPlasmicElementProxy;

export const PlasmicProductCard__VariantProps = new Array(
  "withReviews",
  "onSale"
);

export const PlasmicProductCard__ArgProps = new Array(
  "title",
  "price",
  "image",
  "ratings"
);

const $$ = {};

function PlasmicProductCard__RenderFunc(props) {
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
        path: "withReviews",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.withReviews
      },
      {
        path: "onSale",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.onSale
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
  const [isRootHover, triggerRootHoverProps] = useTrigger("useHover", {});
  const triggers = {
    hover_root: isRootHover
  };
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
          [sty.rootonSale]: hasVariant($state, "onSale", "onSale"),
          [sty.rootwithReviews]: hasVariant(
            $state,
            "withReviews",
            "withReviews"
          )
        }
      )}
      data-plasmic-trigger-props={[triggerRootHoverProps]}
    >
      <div className={classNames(projectcss.all, sty.freeBox__j1Kk)}>
        {renderPlasmicSlot({
          defaultContents: (
            <PlasmicImg__
              alt={""}
              className={classNames(sty.img__hfUkQ)}
              displayHeight={"auto"}
              displayMaxHeight={"none"}
              displayMaxWidth={"none"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"100%"}
              src={{
                src: f1LjjptYHBvqm2,
                fullWidth: 270,
                fullHeight: 310,
                aspectRatio: undefined
              }}
            />
          ),

          value: args.image
        })}
        <div
          className={classNames(projectcss.all, sty.freeBox__clobv, {
            [sty.freeBoxonSale__clobv3A8]: hasVariant(
              $state,
              "onSale",
              "onSale"
            )
          })}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__ql75J
            )}
          >
            {"Sale"}
          </div>
        </div>
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__wFgg)}
        >
          <ShoppingCartIcon
            className={classNames(projectcss.all, sty.svg__cDyQ)}
            role={"img"}
          />

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__z9VWr
            )}
          >
            {"Add to cart"}
          </div>
          <HeartOIcon
            className={classNames(projectcss.all, sty.svg__myAx)}
            role={"img"}
          />

          <ExpandIcon
            className={classNames(projectcss.all, sty.svg__vkWkd)}
            role={"img"}
          />
        </Stack__>
      </div>
      {renderPlasmicSlot({
        defaultContents: (
          <Ratings
            className={classNames("__wab_instance", sty.ratings___7IvJa)}
          />
        ),

        value: args.ratings
      })}
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox___1Q32S)}
      >
        {renderPlasmicSlot({
          defaultContents: "Title",
          value: args.title,
          className: classNames(sty.slotTargetTitle)
        })}
        {renderPlasmicSlot({
          defaultContents: "$100",
          value: args.price,
          className: classNames(sty.slotTargetPrice)
        })}
      </Stack__>
    </Stack__>
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
          internalArgPropNames: PlasmicProductCard__ArgProps,
          internalVariantPropNames: PlasmicProductCard__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicProductCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProductCard";
  } else {
    func.displayName = `PlasmicProductCard.${nodeName}`;
  }
  return func;
}

export const PlasmicProductCard = Object.assign(
  // Top-level PlasmicProductCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicProductCard
    internalVariantProps: PlasmicProductCard__VariantProps,
    internalArgProps: PlasmicProductCard__ArgProps
  }
);

export default PlasmicProductCard;
/* prettier-ignore-end */
