<template>
<div>
    <div class="w3-bar w3-blue w3-card navbar">
        <router-link to="/" class="w3-bar-item w3-button w3-mobile" @click="handleTabClick(1)">
            Thông tin phòng ký túc xá
        </router-link>

        <router-link to="/user" class="w3-bar-item w3-button w3-mobile" @click="handleTabClick(2)">
            Thông tin tài khoản
        </router-link>

        <router-link to="/dang-ky-o" class="w3-bar-item w3-button w3-mobile" @click="handleTabClick(3)">
            Đăng ký ở
        </router-link>
    </div>
    <div class="w3-panel w3-center w3-margin-top" v-if="hopThoaiDangNhap" :class="{ 'w3-hide': !hopThoaiDangNhap.show, 'w3-text-red': hopThoaiDangNhap.type === 'err', 'w3-text-green': hopThoaiDangNhap.type === 'success' }">
    {{ hopThoaiDangNhap.content }}
    </div>
</div>
</template>



<script>
      import ThongTinKyTucXa from './ThongTinKyTucXa.vue'
      import ThongTinSinhVien from './ThongTinSinhVien.vue'
      import DangKyO from './DangKyO.vue'
      import Login from './Login.vue'
    //   import Dashboard from './dashboard'

  export default {
    components: {
      ThongTinKyTucXa,
      Login,
      ThongTinSinhVien,
      DangKyO
    },
    data() {
        return {
            activeTab: 1,
            duLieuSV: undefined,
            validate: undefined,
            user: {
                email: '',
                matKhau: '',
            },
            canBo: {},
            hopThoaiDangNhap: {
                content: '',
                type: '',
                show: false,
            },
        }
    },
    
    methods: {
        handleTabClick(tabIndex) {
            this.activeTab = tabIndex
        },

        

        
    },

    mounted() {
        const duLieu = sessionStorage.getItem('duLieuSV')
        if(duLieu)
            this.duLieuSV = duLieu
    }
  }
</script>

