import { Badge, Col } from 'antd'
import React from "react";
import { WrapperHeader, WrapperTextHeader, WrapperAccount, WrapperTextCart } from './styled'
import { UserOutlined, CaretDownOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch'

const HeaderComponent = () => {
    return (
        <div>
            <WrapperHeader>
                <Col span={6}>
                    <WrapperTextHeader>
                        WEBBANHANG
                    </WrapperTextHeader>
                </Col>
                <Col span={12}>
                    <ButtonInputSearch
                        size='large'
                        bordered={false}
                        textButton='tìm kiếm'
                        placeholder="input search text"
                    />
                </Col>
                <Col span={6} style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                    <WrapperAccount>
                        <div>
                            <UserOutlined style={{ fontSize: '30px' }} />

                        </div>
                        <WrapperTextCart>
                            <span>Đăng nhập/Đăng ký</span>
                            <div>
                                <span>Tài khoản</span>
                                <CaretDownOutlined />
                            </div>
                        </WrapperTextCart>
                    </WrapperAccount>
                    <div>
                        <Badge count={4} size="small">
                            <ShoppingCartOutlined style={{ fontSize: '30px', color: '#fff' }} />
                        </Badge>
                        <WrapperTextCart>Giỏ hàng</WrapperTextCart>
                    </div>
                </Col>
            </WrapperHeader>
        </div>
    )
}

export default HeaderComponent