<template>
    <div class="zyh-app">
        <mt-header fixed title="强人锁男"></mt-header>
        <router-view></router-view>
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item mui-active" to="/home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item" to="/member">
                <span class="mui-icon mui-icon-email">
                    
                </span>
                <span class="mui-tab-label">消息</span>
            </router-link>
            <router-link class="mui-tab-item" to="/shopcar">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
                    <span class="mui-badge">0</span>
                </span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="mui-tab-item" to="/search">
                <span class="mui-icon mui-icon-gear"></span>
                <span class="mui-tab-label">设置</span>
            </router-link>
        </nav>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                msg:'大力出奇迹'
            }
        }
    }
</script>