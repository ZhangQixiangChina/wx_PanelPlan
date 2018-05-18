// components/stepper/stepper.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        min: Number,
        max: Number,
        stepSize: Number,
        step: {
            type: Number,
            observer: '_onStepChange'
        }
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {

        _onStepChange: function (newVal, oldVal) {
            this.triggerEvent('change', {
                oldVal: oldVal,
                newVal: newVal
            })
        },

        stepMinus: function () {
            let newStep = this.properties.step - this.properties.stepSize
            if (newStep < this.properties.min) return
            this.setData({ step: newStep })
        },

        stepPlus: function () {
            let newStep = this.properties.step + this.properties.stepSize
            if (newStep > this.properties.max) return
            this.setData({ step: newStep })
        },

    }


})
