<template>
  <Login v-if=" nguyenVong.maSinhVien===undefined" @update="reRender" />

  <div v-else class="w3-container w3-center">
    <h3>Chọn khu thực hiện đăng ký</h3>
    <form @submit="handleSubmit($event)">
        <div class="w3-margin-bottom">
          <label class="w3-margin-right" htmlFor="DangKyKTX">Khu KTX: </label>
          <select @change="changeNguyenVong('khuDangKy', $event)" class="w3-card" id="DangKyKTX" name="DangKyKTX" size="1">
              <option value="khuA">KhuA</option>
              <option value="KhuB">KhuB</option>
          </select>
        </div>
        <div>
          <label class="w3-clear" htmlFor="nguyenVong">Nguyện vọng: </label>
          <textarea @blur="changeNguyenVong('noiDung', $event)" id="nguyenVong" name="nguyenVong" rows="5" cols="30"></textarea>
        </div>
        <button 
        class="w3-padding w3-hover-grey w3-border-0 w3-card-2">
          <i class="fa-solid fa-arrow-right-to-bracket"></i>
          <span class="w3-margin-left">Thực hiện</span>
        </button>
    </form>

    <div ref="model" class="w3-modal">
      <div class="w3-modal-content">
        <div class="w3-container w3-padding">
          <span class="w3-right w3-text-red w3-bold"
            @click="hideModal()">&times;
          </span>
          <p>Bạn có chăc muốn đăng ký ở ?</p>
          <span @click="hideModal()"
          class="w3-right w3-padding w3-card">
            Không
          </span>
          <span 
          class="w3-right w3-padding w3-card w3-margin-right"
          @click="thucHienDangKy()"
          >
            Có
          </span>
        </div>
      </div>
    </div>

    
  </div>

  <div 
    className="w3-panel w3-center w3-margin-top w3-hide" 
    ref="hopThoaiDangNhap"
    >
  </div>
  
</template>

<script>
import Login from './Login.vue'
export default {
  components: {
    Login
  },
  data() {
      return {
          nguyenVong: {}
      }
  },

  methods: {
    reRender(duLieu) {
      this.nguyenVong = {
        khuDangKy: "KhuA",
        noiDung: "",
        maSinhVien: duLieu.maSinhVien,
        hoTen: duLieu.ho + ' ' + duLieu.tenLot + ' '
                + duLieu.ten,
        email: duLieu.email
      }
    },

    setNguyenVong() {
      const duLieu = JSON.parse(sessionStorage.getItem('duLieuSV'))
      if(duLieu)
        this.nguyenVong = {
            khuDangKy: "KhuA",
            noiDung: "",
            maSinhVien: duLieu.maSinhVien,
            hoTen: duLieu.ho + ' ' + duLieu.tenLot + ' '
                    + duLieu.ten,
            email: duLieu.email
        }
    },

    changeNguyenVong(prop, event) {
      const {...pre} = this.nguyenVong
      if(prop === 'khuDangKy')
        this.nguyenVong = {...pre, khuDangKy: event.target.value}
      if(prop === 'noiDung')
      this.nguyenVong = {...pre, noiDung: event.target.value}
    },

    handleSubmit(e) {
      e.preventDefault()
      this.$refs.model.style.display = 'block'
    },

    hideModal() {
      this.$refs.model.style.display = 'none'
    },

    thucHienDangKy() {
      fetch('http://localhost:3001/api/sinhvien/dangkyo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        hoTen: this.nguyenVong.hoTen,
        maSinhVien: this.nguyenVong.maSinhVien,
        khuDangKy: this.nguyenVong.khuDangKy,
        noiDungNV: this.nguyenVong.noiDung,
        email: this.nguyenVong.email
      })
      })
      .then(response => {
        if(response.ok){
          this.$refs.hopThoaiDangNhap.innerHTML = 'Đã đăng ký nguyện vọng thành công!'
          this.$refs.hopThoaiDangNhap.classList.remove('w3-hide')
          this.$refs.hopThoaiDangNhap.classList.add('w3-text-green')
          setTimeout(() => {
            this.$refs.hopThoaiDangNhap.classList.add('w3-hide')
            this.$refs.hopThoaiDangNhap.classList.remove('w3-text-green')
          }, 3000);
        }
      })
      .catch(error => console.error(error))

      this.hideModal()
    }
  },

  mounted() {
      this.setNguyenVong()
  }
}
</script>