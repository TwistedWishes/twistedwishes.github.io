// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: pxrbsjdrcYiKeJrrydSqC9
// Component: DYJN_6hRhobBcR
import * as React from "react";
import { Link } from "gatsby";
import {
  PlasmicLink as PlasmicLink__,
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  hasVariant
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import MenuButton from "../../MenuButton"; // plasmic-import: tHKra2qqJQ6tmD/component
import IconLink from "../../IconLink"; // plasmic-import: oxTB6Z3xMqtire/component
import { useScreenVariants as useScreenVariantszNo6Oijq3JlNiY } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: ZNo6oijq3JlNiY/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import * as projectcss from "./plasmic_tekkou_studios.module.css"; // plasmic-import: pxrbsjdrcYiKeJrrydSqC9/projectcss
import * as sty from "./PlasmicHeader2.module.css"; // plasmic-import: DYJN_6hRhobBcR/css
import Logo4SvgIcon from "./icons/PlasmicIcon__Logo4Svg"; // plasmic-import: kBxn1sGYSYlCDu/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: GBu9tlyNK1_c67/icon

createPlasmicElementProxy;

export const PlasmicHeader2__VariantProps = new Array();

export const PlasmicHeader2__ArgProps = new Array();

const $$ = {};

function PlasmicHeader2__RenderFunc(props) {
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
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantszNo6Oijq3JlNiY()
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
        sty.root
      )}
    >
      <MenuButton
        data-plasmic-name={"menuButton"}
        data-plasmic-override={overrides.menuButton}
        className={classNames("__wab_instance", sty.menuButton)}
      />

      <PlasmicLink__
        className={classNames(projectcss.all, projectcss.a, sty.link__lVvU3)}
        component={Link}
        href={`/`}
        platform={"gatsby"}
      >
        <Logo4SvgIcon
          className={classNames(projectcss.all, sty.svg___6LiWd)}
          role={"img"}
        />
      </PlasmicLink__>
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__fsCl0)}
      >
        <PlasmicLink__
          className={classNames(
            projectcss.all,
            projectcss.a,
            projectcss.__wab_text,
            sty.link__z39RG
          )}
          component={Link}
          href={`/store`}
          platform={"gatsby"}
        >
          {"Store"}
        </PlasmicLink__>
        <PlasmicLink__
          className={classNames(
            projectcss.all,
            projectcss.a,
            projectcss.__wab_text,
            sty.link__aqJf3
          )}
          component={Link}
          href={`/about`}
          platform={"gatsby"}
        >
          {"About"}
        </PlasmicLink__>
        <PlasmicLink__
          className={classNames(
            projectcss.all,
            projectcss.a,
            projectcss.__wab_text,
            sty.link__riHId
          )}
          component={Link}
          href={`/faq`}
          platform={"gatsby"}
        >
          {hasVariant(globalVariants, "screen", "mobile") ? "Faq" : "Faq"}
        </PlasmicLink__>
      </Stack__>
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__vRsVg)}
      >
        <IconLink
          data-plasmic-name={"iconLink"}
          data-plasmic-override={overrides.iconLink}
          className={classNames("__wab_instance", sty.iconLink)}
          icon={
            <React.Fragment>
              <IconIcon
                className={classNames(projectcss.all, sty.svg__so9Sy)}
                role={"img"}
              />

              <div
                data-plasmic-name={"text"}
                data-plasmic-override={overrides.text}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text
                )}
              >
                {"0"}
              </div>
            </React.Fragment>
          }
        />
      </Stack__>
    </Stack__>
  );
}

const PlasmicDescendants = {
  root: ["root", "menuButton", "iconLink", "text"],
  menuButton: ["menuButton"],
  iconLink: ["iconLink", "text"],
  text: ["text"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicHeader2__ArgProps,
          internalVariantPropNames: PlasmicHeader2__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHeader2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeader2";
  } else {
    func.displayName = `PlasmicHeader2.${nodeName}`;
  }
  return func;
}

export const PlasmicHeader2 = Object.assign(
  // Top-level PlasmicHeader2 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    menuButton: makeNodeComponent("menuButton"),
    iconLink: makeNodeComponent("iconLink"),
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicHeader2
    internalVariantProps: PlasmicHeader2__VariantProps,
    internalArgProps: PlasmicHeader2__ArgProps
  }
);

export default PlasmicHeader2;
/* prettier-ignore-end */
