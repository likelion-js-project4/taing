import { isString } from '../../lib/index.js'

export function movePage(url) {
  if (isString(url)) location.href = url
}
