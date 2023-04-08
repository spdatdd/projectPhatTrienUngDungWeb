import { createRouter, createWebHistory } from 'vue-router'
import Navigation from '../components/Navigation.vue'
import ThongTinSinhVien from '../components/ThongTinSinhVien.vue'
import ThongTinKyTucXa from '../components/ThongTinKyTucXa.vue'
import DangKyO from '../components/DangKyO.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
        path: '/',
        component: ThongTinKyTucXa
    },
    {
        path: '/user',
        component: ThongTinSinhVien
    },
    {
        path: '/dang-ky-o',
        component: DangKyO
    }
  ]
})

export default router