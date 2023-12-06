import Home from '../views/home/Home.vue'
import Center from '../views/center/Center.vue'
import UserAdd from '../views/user-manage/UserAdd'
import UserList from '../views/user-manage/UserList'
import NewsAdd from '../views/news-manage/NewsAdd'
import NewsList from '../views/news-manage/NewsList'
import ProductAdd from '../views/product-manage/ProductAdd'
import ProductList from '../views/product-manage/ProductList'
import pageList from '../views/page-manage/PageList.vue'
import NotFound from '../views/notfound/NotFound.vue'
const routes = [
  {
    path: '/index',
    component: Home
  },
  {
    path: '/center',
    component: Center
  },
  {
    path: '/page',
    component:pageList
  }
  ,
  {
    path: '/user/adduser',
    component: UserAdd
  },
  {
    path: '/user/userlist',
    component: UserList
  },
  {
    path: '/news/addnews',
    component: NewsAdd
  },
  {
    path: '/news/newslist',
    component: NewsList
  },
  {
    path: '/prodoct/addproduct',
    component: ProductAdd
  },
  {
    path: '/prodoct/productlist',
    component: ProductList
  },
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Notfound',
    component: NotFound
  }
]

export default routes
