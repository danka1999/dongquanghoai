import { Col, Image, Row } from 'antd'
import React from 'react'
import imageProduct from '../../assets/images/test.webp'
import imageProductSmall from '../../assets/images/test1.webp'
import { StarFilled } from '@ant-design/icons'
import { WrapperAddressProduct, WrapperPriceProduct, WrapperPriceTextProduct, WrapperQualityProduct, WrapperStyleColImage, WrapperStyleImageSmall, WrapperStyleNameProduct, WrapperStyleTextSell } from './styled'
const ProductDetailComponent = () => {
    return (
        <Row>
            <Col span={10} style={{ padding: '16px', background: '#fff' }}>
                <Image src={imageProduct} alt='image product' preview={false} />
                <Row style={{ paddingTop: '10px', justifyContent: 'space-between' }}>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imageProductSmall} alt='image small' preview={false} />
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imageProductSmall} alt='image small' preview={false} />
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imageProductSmall} alt='image small' preview={false} />
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imageProductSmall} alt='image small' preview={false} />
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imageProductSmall} alt='image small' preview={false} />
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imageProductSmall} alt='image small' preview={false} />
                    </WrapperStyleColImage>
                </Row>
            </Col>
            <Col span={14}>
                <WrapperStyleNameProduct>Điện thoại Xiaomi Redmi Note 12 (8GB/128GB) - Hàng chính hãng</WrapperStyleNameProduct>
                <div>
                    <StarFilled style={{ fontSize: '12px', color: 'rgb(253, 216, 54)' }} />
                    <StarFilled style={{ fontSize: '12px', color: 'rgb(253, 216, 54)' }} />
                    <StarFilled style={{ fontSize: '12px', color: 'rgb(253, 216, 54)' }} />
                    <WrapperStyleTextSell> | Đã bán 1000+</WrapperStyleTextSell>
                </div>
                <WrapperPriceProduct>
                    <WrapperPriceTextProduct>200.000đ</WrapperPriceTextProduct>
                </WrapperPriceProduct>
                <WrapperAddressProduct>
                    <span>Giao đến</span>
                    <span className='address'> Q. 1, P. Bến Nghé, Hồ Chí Minh</span>
                    <span className='change-address'>Đổi địa chỉ</span>
                </WrapperAddressProduct>
                <WrapperQualityProduct>
                    <div>Số lượng</div>
                    <div>

                    </div>
                </WrapperQualityProduct>
            </Col>
        </Row>
    )
}

export default ProductDetailComponent