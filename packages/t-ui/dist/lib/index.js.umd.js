(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("vue")) : typeof define === "function" && define.amd ? define(["exports", "vue"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.TUI = {}, global.Vue));
})(this, function(exports2, vue) {
  "use strict";
  var __vite_style__ = document.createElement("style");
  __vite_style__.innerHTML = ".sa-button {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n  text-decoration: none;\n  -webkit-tap-highlight-color: transparent;\n  background: #1989fa;\n  color: #fff;\n  border: 2px solid #1989fa;\n}\n.sa-button-plain {\n  background-color: #fff;\n  border: 2px solid #1989fa;\n  color: #1989fa;\n}\n.sa-button-small {\n  padding: 0 24px;\n  font-size: 12px;\n  height: 48px;\n}\n.sa-button-middle {\n  padding: 0 32px;\n  font-size: 14px;\n  height: 52px;\n}\n.sa-button-large {\n  padding: 0 72px;\n  font-size: 16px;\n  height: 58px;\n}\n.sa-button-disabled {\n  pointer-events: none;\n  opacity: 0.5;\n}\n.sa-button::after {\n  border: none;\n}.sa-button {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n  text-decoration: none;\n  -webkit-tap-highlight-color: transparent;\n  background: #1989fa;\n  color: #fff;\n  border: 2px solid #1989fa;\n}\n.sa-button-plain {\n  background-color: #fff;\n  border: 2px solid #1989fa;\n  color: #1989fa;\n}\n.sa-button-small {\n  padding: 0 24px;\n  font-size: 12px;\n  height: 48px;\n}\n.sa-button-middle {\n  padding: 0 32px;\n  font-size: 14px;\n  height: 52px;\n}\n.sa-button-large {\n  padding: 0 72px;\n  font-size: 16px;\n  height: 58px;\n}\n.sa-button-disabled {\n  pointer-events: none;\n  opacity: 0.5;\n}\n.sa-button::after {\n  border: none;\n}\n.page {\n  color: #fff;\n}";
  document.head.appendChild(__vite_style__);
  const buttonProps$1 = {
    plain: {
      type: Boolean,
      default: false
    },
    size: String,
    disabled: {
      type: Boolean,
      default: false
    },
    round: {
      type: [Number, String],
      default: 0,
      validator: (val) => {
        const n = Number(val);
        return !isNaN(n);
      }
    },
    block: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  };
  const buttonEmits$1 = {
    click: null
  };
  const _hoisted_1$1 = ["loading"];
  const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
    name: "index",
    props: buttonProps$1,
    emits: buttonEmits$1,
    setup(__props, { emit }) {
      const props = __props;
      const sizeRef = vue.computed(() => {
        const { size } = props;
        return size || "middle";
      });
      const handleClick = () => {
        if (!props.disabled) {
          emit("click");
        }
      };
      const buttonStyle = vue.computed(() => {
        return {
          "border-radius": props.round + "px",
          width: props.block ? "100%" : "",
          display: props.block ? "flex" : ""
        };
      });
      const buttonClass = vue.computed(() => {
        return ["sa-button", props.plain ? "sa-button-plain" : "", "sa-button-" + sizeRef.value, props.disabled || props.loading ? "sa-button-disabled" : ""];
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("button", {
          class: vue.normalizeClass(vue.unref(buttonClass)),
          style: vue.normalizeStyle(vue.unref(buttonStyle)),
          loading: _ctx.loading,
          onClick: handleClick
        }, [
          vue.renderSlot(_ctx.$slots, "default")
        ], 14, _hoisted_1$1);
      };
    }
  });
  const index_vue_vue_type_style_index_0_lang$1 = "";
  const buttonProps = {
    plain: {
      type: Boolean,
      default: false
    },
    size: String,
    disabled: {
      type: Boolean,
      default: false
    },
    round: {
      type: [Number, String],
      default: 0,
      validator: (val) => {
        const n = Number(val);
        return !isNaN(n);
      }
    },
    block: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  };
  const buttonEmits = {
    click: null
  };
  const _hoisted_1 = ["loading"];
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    name: "index",
    props: buttonProps,
    emits: buttonEmits,
    setup(__props, { emit }) {
      const props = __props;
      const sizeRef = vue.computed(() => {
        const { size } = props;
        return size || "middle";
      });
      const handleClick = () => {
        if (!props.disabled) {
          emit("click");
        }
      };
      const buttonStyle = vue.computed(() => {
        return {
          "border-radius": props.round + "px",
          width: props.block ? "100%" : "",
          display: props.block ? "flex" : ""
        };
      });
      const buttonClass = vue.computed(() => {
        return ["sa-button", props.plain ? "sa-button-plain" : "", "sa-button-" + sizeRef.value, props.disabled || props.loading ? "sa-button-disabled" : ""];
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("button", {
          class: vue.normalizeClass(vue.unref(buttonClass)),
          style: vue.normalizeStyle(vue.unref(buttonStyle)),
          loading: _ctx.loading,
          onClick: handleClick
        }, [
          vue.renderSlot(_ctx.$slots, "default")
        ], 14, _hoisted_1);
      };
    }
  });
  const index_vue_vue_type_style_index_0_lang = "";
  const testfun = (a, b) => {
    return a + b;
  };
  exports2.Button = _sfc_main$1;
  exports2.ButtonTwo = _sfc_main;
  exports2.testfun = testfun;
  Object.defineProperties(exports2, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
});
