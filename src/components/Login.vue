<template>
    <form 
      class="w3-content w3-margin-top w3-padding w3-card" 
      style="max-width:500px;overflow:auto"
      @submit="handleSubmit"
    >

      <div class="w3-row w3-margin-bottom">
        <label class="w3-third">Email:</label>
        <input 
          class="w3-twothird w3-border-0 w3-card"
          type="text"
          v-model="duLieuNhap.email"
          name="email"
          required
        >
      </div>
        
      <div class="w3-row w3-margin-bottom">
        <label class="w3-third">Mật khẩu:</label>
        <input 
          class="w3-twothird w3-border-0 w3-card"
          type="password"
          v-model="duLieuNhap.matKhau"
          name="password"
          required
        >
      </div>
      <button 
        class="w3-right w3-blue w3-border-0 w3-card w3-button"
      >
        <i class="fa-solid fa-right-to-bracket"></i> Đăng nhập
      </button>
    </form>
  </template>
  
<script>
  export default {
    data() {
      return {
        duLieuNhap: {
          email: sessionStorage.getItem('email') || '',
          matKhau: sessionStorage.getItem('matKhau') || '',
        },
      };
    },
  
    methods: {
      setUser(user) {
        fetch(`http://localhost:3001/api/sinhvien/${user.email}-${user.matKhau}`)
        .then(response => {
        if(response.ok)
            return response.json()
        else
            throw new Error(response.status)
        })
        .then(data => {
          // Lưu dữ liệu để sử dụng nếu người dùng refresh thì không cần phải đăng nhập lại
          sessionStorage.setItem('duLieuSV', JSON.stringify(data))
          this.$emit('update', data)
        })
        .catch(error => {
            console.log(error)
        })
    },

    handleSubmit(event) {
      event.preventDefault()
      const { email, matKhau } = this.duLieuNhap
      sessionStorage.setItem('email', email)
      sessionStorage.setItem('matKhau', matKhau)
      this.setUser({ email, matKhau })
    }
    }
  };
  </script>
  