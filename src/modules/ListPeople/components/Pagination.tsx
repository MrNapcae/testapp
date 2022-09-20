import React from 'react'
import styled from 'styled-components'

interface IProps {
    items: number[]
    onClick: (page: number) => void
}

export const Pagination = React.memo<IProps>(({items, onClick}) => {
    return (
        <Container>
            {items.map((item, i) =>
                <div key={i} onClick={() => onClick(item)}>{item}</div>
            )}
        </Container>
    )
})


const Container = styled.div`
  display: flex;
  margin: 25px 0;
  justify-content: center;
  gap: 20px;
`
