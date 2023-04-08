<template>
  <Login v-if=" duLieuSV==='' && render===0 " @update="reRender"/>
  <div v-else=" duLieuSV!=='' " class="w3-card w3-margin-top w3-padding-16 w3-content w3-row ">
    
    <h3 class="w3-center">Thông tin sinh viên</h3>
    <div class="w3-padding w3-half w3-mobile w3-border-right">
      <div>
        <span>Tên: </span>
        <span>{{duLieuSV.ho+" "+duLieuSV.tenLot+" "+duLieuSV.ten}}</span>
      </div>
      <div>
        <span>Mã sinh viên: </span>
        <span>{{duLieuSV.maSinhVien}}</span>
      </div>
      <div>
        <span>Ngành học: </span>
        <span>{{duLieuSV.nganhHoc}}</span>
      </div>
      <div>
        <span>Hộ khẩu Tỉnh/TP: </span>
        <span>{{duLieuSV.hoKhauTinhTP}}</span>
      </div>
      <div>
        <span>Số điện thoại cá nhân: </span>
        <span>{{duLieuSV.soDT}}</span>
      </div>
    </div>
    <div class="w3-padding w3-half w3-mobile w3-margin-bottom">
      <div>
        <span>Ngày sinh: </span>
        <span>{{duLieuSV.ngaySinh}}</span>
      </div>
      <div>
        <span>Lớp: </span>
        <span>{{duLieuSV.lop}}</span>
      </div>
      <div>
        <span>Khóa học: </span>
        <span>{{duLieuSV.khoaHoc}}</span>
      </div>
      <div>
        <span>Email: </span>
        <span>{{duLieuSV.email}}</span>
      </div>
      <div>
        <span>Diện chính sách: </span>
        <span>{{duLieuSV.dienChinhSach}}</span>
      </div>
    </div>

    <h3 class="w3-clear w3-center">Thông tin ký túc xá</h3>
    <div class="w3-padding w3-mobile ">
      <div>
        <span>Phòng: </span>
        <span>{{duLieuSV.tenPhong}}</span>
      </div>
      <div>
        <span>Dãy: </span>
        <span>{{duLieuSV.maDay}}</span>
      </div>
      <div>
        <span>Ngày đăng ký ở: </span>
        <span>{{duLieuSV.ngayDangKyO}}</span>
      </div>
      <div>
        <span>Ngày rút đơn ở KTX: </span>
        <span>{{duLieuSV.ngayRutDonO}}</span>
      </div>
      <div>
        <span>Ngày được duyệt: </span>
        <span>{{duLieuSV.ngayDuocDuyet}}</span>
      </div>
    </div>
    
      


    <h3 class="w3-center w3-clear" >Thông tin đóng phí điện nước</h3>
    <div class="w3-mobile w3-padding">
        <div><span>Ngày thanh toán điện nước: </span>
          {{duLieuSV.ngayDongTienDN}}
        </div>

        <div><span>Tổng tiền điện nước: </span>
          {{duLieuSV.tongTien}}
        </div>

        <div><span>Trạng thái thanh toán: </span>
          {{duLieuSV.trangThaiDN}}
        </div>
    </div>

    <h3 class="w3-center w3-clear">Thông báo đóng phí</h3>
    <div class="w3-padding">
      <div>
        <span>Ngày thanh toán phòng: </span>
        {{duLieuSV.ngayDongTienP}}
      </div>

      <div>
        <span>Trạng thái thanh toán: </span>
        {{duLieuSV.trangThaiP}}
      </div>

      <div>
        <span>Tổng tiền phòng: </span>
        {{duLieuSV.phiPhong}}
      </div>

      <div>
        <span>Nơi đóng phí: Văn phòng ký túc xá</span>
        
      </div>
    </div>
  </div>
</template>

<script>
import Login from './Login.vue'
export default {
  components: {
    Login
  },

  data(){
      return {
        duLieuSV: '',
        render: 0,
      }
  },

  methods: {
    reRender(duLieu) {
      this.render = 1
      this.duLieuSV = duLieu
    }
  },

  mounted() {
    const duLieu = JSON.parse(sessionStorage.getItem('duLieuSV'))
    if(duLieu)
      this.duLieuSV = duLieu
  },

  watch: {
    duLieuSV(newData) {
      
    }
  }
}

</script>