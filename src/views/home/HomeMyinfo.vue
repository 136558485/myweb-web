<template>
    <div id="home-myinfo">
        <div>{{$t('message.userinfo.nickname')}}laugher</div>
        <div>{{$t('message.userinfo.codeage')}}4年</div>
        <div>{{$t('message.userinfo.technology')}}：vue html css js java spring mysql oracle</div>
        <a href="https://github.com/136558485" target="_blank">{{$t('message.userinfo.clicktogithub')}}</a>
    </div>
</template>
<script>
export default {
    name: "HomeMyinfo"
}
</script>
<style>
#home-myinfo {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}
</style>