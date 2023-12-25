import Home from '../views/home/Home.vue'
import Center from '../views/center/Center.vue'
import UserAdd from '../views/user-manage/UserAdd'
import UserList from '../views/user-manage/UserList'
import NewsAdd from '../views/news-manage/NewsAdd'
import NewsList from '../views/news-manage/NewsList'
import NewsEdit from '../views/news-manage/NewsEdit'
import ProductAdd from '../views/product-manage/ProductAdd'
import ProductList from '../views/product-manage/ProductList'
import ProEdit from '../views/product-manage/ProEdit.vue'
import CateAdd from '../views/cate-manage/CateAdd.vue'
import CateList from '../views/cate-manage/CateList.vue'
import CateEdit from '../views/cate-manage/CateEdit.vue'
import pageList from '../views/page-manage/PageList.vue'
import PageEdit from '../views/page-manage/PageEdit.vue'
import OrderList from '../views/order-manage/OrderList.vue'
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
    path: '/page/pagelist',
    component:pageList
  },
  {
    path: '/page/editpage/:id',
    component:PageEdit
  },
  {
    path: '/cates/addcates',
    component: CateAdd
  },
  {
    path: '/cates/cateslist',
    component: CateList
  },
  {
    path: '/cates/editcates/:id',
    component: CateEdit
  },
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
    path:'/news/editnews/:id',
    component:NewsEdit
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
    path: '/prodoct/editpros/:id',
    component: ProEdit
  },
  {
    path: '/order/orderlist',
    component: OrderList
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
