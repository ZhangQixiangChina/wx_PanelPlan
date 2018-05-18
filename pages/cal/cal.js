// pages/cal/cal.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

        result: 0,
        totalWidth: 0,
        sideWidth: 0,
        sideNum: 0,
        midWidth: 0,
        midNum: 0,

    },




    getTotalWidth: function (e) {
        this.data.totalWidth = e.detail.value
    },

    getSideWidth: function (e) {
        this.data.sideWidth = e.detail.value
    },

    getMidWidth: function (e) {
        this.data.midWidth = e.detail.value
    },

    onSideNumChange: function (e) {
        console.log(e.detail)
        this.data.sideNum = e.detail.newVal
        this.calculate()
    },

    onMidNumChange: function (e) {
        this.data.midNum = e.detail.value
        this.calculate()
    },

    calculate: function () {
        let fenzi = this.data.totalWidth - (this.data.sideWidth * this.data.sideNum + this.data.midWidth * this.data.midNum)
        let fenmu = this.data.sideNum + this.data.midNum - 1
        let result = (fenzi / fenmu).toFixed(3)
        this.setData({
            result: result
        })
    },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.getStorage({
            key: 'last_data',
            success: (res) => {
                this.setData({ ...res.data })
                console.log('onLoad')
                console.log(res.data)
            },
        })

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {
        wx.setStorage({
            key: 'last_data',
            data: this.data,
        })

        console.log('onHide')
        console.log(this.data)
    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {


    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    },


})