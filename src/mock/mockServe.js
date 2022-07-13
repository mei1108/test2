import Mock from "mockjs";

import banner from './banners'
import floor from './floors'

Mock.mock("/mock/banner", { code: 200, data: banner })
Mock.mock("/mock/floor", { code: 200, data: floor })