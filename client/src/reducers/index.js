import { combineReducers } from 'redux'
import categoryReducer from './categoryReducer'
import errorReducer from './errorReducer'

import authReducer from './authReducer'
import historyReducer from './historyReducer'
import roleReducer from './roleReducer'

import memberReducer from './memberReducer'
import productReducer from './productReducer'
import invoiceReducer from './invoiceReducer'
import payslipReducer from './payslipReducer'
import notificationReducer from './notificationReducer'
import supplierReducer from './supplierReducer'

export default combineReducers({
  category: categoryReducer,
  error: errorReducer,
  auth: authReducer,
  history: historyReducer,
  role: roleReducer,
  member: memberReducer,
  product: productReducer,
  invoice: invoiceReducer,
  payslip: payslipReducer,
  showNoti: notificationReducer,
  supplier: supplierReducer,
})
