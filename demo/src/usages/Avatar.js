import React from 'react'
import Article from './Article'
import { Avatar } from '../../../src/Components'

const EX_URL = "https://picturepan2.github.io/spectre/img/avatar-1.png"

const AvatarUsage = props => (
    <Article {...props} >
        <Avatar size="xs" chars="XS" />
        <Avatar size="sm" chars="SM" />
        <Avatar size="lg" chars="LG" />
        <Avatar size="xl" chars="XL" />
        <br/>
        <Avatar size="xs" image={EX_URL} />
        <Avatar size="sm" image={EX_URL} />
        <Avatar size="lg" image={EX_URL} />
        <Avatar size="xl" image={EX_URL} />
    </Article>
)

export default AvatarUsage