import Image, { ImageProps } from 'next/image'

type MyImageProps = {} & ImageProps

export function MyImage(props: MyImageProps) {
  return <Image {...props} alt={props.alt || ''} loading='lazy' />
}
