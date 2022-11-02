import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, unref, normalizeStyle, renderSlot } from "vue";
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
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  name: "index",
  props: buttonProps$1,
  emits: buttonEmits$1,
  setup(__props, { emit }) {
    const props = __props;
    const sizeRef = computed(() => {
      const { size } = props;
      return size || "middle";
    });
    const handleClick = () => {
      if (!props.disabled) {
        emit("click");
      }
    };
    const buttonStyle = computed(() => {
      return {
        "border-radius": props.round + "px",
        width: props.block ? "100%" : "",
        display: props.block ? "flex" : ""
      };
    });
    const buttonClass = computed(() => {
      return ["sa-button", props.plain ? "sa-button-plain" : "", "sa-button-" + sizeRef.value, props.disabled || props.loading ? "sa-button-disabled" : ""];
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: normalizeClass(unref(buttonClass)),
        style: normalizeStyle(unref(buttonStyle)),
        loading: _ctx.loading,
        onClick: handleClick
      }, [
        renderSlot(_ctx.$slots, "default")
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  name: "index",
  props: buttonProps,
  emits: buttonEmits,
  setup(__props, { emit }) {
    const props = __props;
    const sizeRef = computed(() => {
      const { size } = props;
      return size || "middle";
    });
    const handleClick = () => {
      if (!props.disabled) {
        emit("click");
      }
    };
    const buttonStyle = computed(() => {
      return {
        "border-radius": props.round + "px",
        width: props.block ? "100%" : "",
        display: props.block ? "flex" : ""
      };
    });
    const buttonClass = computed(() => {
      return ["sa-button", props.plain ? "sa-button-plain" : "", "sa-button-" + sizeRef.value, props.disabled || props.loading ? "sa-button-disabled" : ""];
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: normalizeClass(unref(buttonClass)),
        style: normalizeStyle(unref(buttonStyle)),
        loading: _ctx.loading,
        onClick: handleClick
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 14, _hoisted_1);
    };
  }
});
const index_vue_vue_type_style_index_0_lang = "";
const testfun = (a, b) => {
  return a + b;
};
export {
  _sfc_main$1 as Button,
  _sfc_main as ButtonTwo,
  testfun
};
