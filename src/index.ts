/* global __BUILD_DATE__ */

import sum from '@/sample'
import list from '@/sample.json'
import values from '@/sample.yaml'
// eslint-disable-next-line import/no-unresolved
import num from 'virtual-module'

console.log(sum(Math.max(...list) + Math.min(...list), num))

console.log(list)

console.log(values.value)

console.log(__BUILD_DATE__)
