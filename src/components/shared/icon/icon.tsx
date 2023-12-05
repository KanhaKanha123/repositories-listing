import { FC, HTMLAttributes, ReactElement } from "react"
import { Image } from "antd"

type IconProps=HTMLAttributes<HTMLElement> & {
    url:string,
    altText:string,
    width:string,
    height:string
}

/**
 * @typedef {Object} LinkProps - creates a new type named 'LinkProps'
 * @property {string} url - a url property of string
 * @property {string} altText - a altText property of string
 * @property {string} width - a width property of string
 * @property {string} height - a height property of string
 * @returns {ReactElement} This is the result
 */
export const Icon:FC<IconProps>=({
    url,
    altText,
    ...props
}):ReactElement<FC>=>(<Image src={url} alt={altText} {...props}></Image>)