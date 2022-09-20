import React, {useEffect, useMemo, useState} from 'react'
import styled from 'styled-components'
import {getPeopleRequest} from "../requestApi";
import {sortByField} from "../utils";
import {IPeople} from "../types";
import {Pagination} from "../components/Pagination";

const COUNT_PEOPLES_PAGE = 10

export const ListPeople = () => {
    const [countPeoples, setCountPeoples] = useState<number>(0)
    const [page, setPage] = useState<number>(1)
    const [peoples, setPeoples] = useState<IPeople[]>([])
    const [sort, setSort] = useState({field: 'name', direction: false})

    useEffect(() => {
        const getStat = async () => {
            try {
                const response = await getPeopleRequest(page)
                setCountPeoples(response.data.count)
                setPeoples(response.data.results)
            } catch (e) {
                console.log(e)
            }
        }

        getStat()
    }, [page])

    const sortArr = useMemo(() => {
            return peoples.sort((a, b) => sortByField(a, b, sort.field, sort.direction))
        }
        , [peoples, sort])

    const onClickSortByField = (field: string) => {
        setSort({field: field, direction: sort.field === field ? !sort.direction : false})
    }

    const pagination = useMemo(() => {
        const countPages = countPeoples / COUNT_PEOPLES_PAGE
        const pages = []
        for (let i = 1; i < countPages; i++) {
            pages.push(i)
        }
        return pages
    }, [countPeoples])

    return (
        <>
            <Pagination items={pagination} onClick={setPage}/>
            <Table>
                <TableHead>
                    <Row>
                        <Col onClick={() => onClickSortByField('name')}>Name</Col>
                        <Col onClick={() => onClickSortByField('height')}>Height</Col>
                        <Col onClick={() => onClickSortByField('mass')}>Mass</Col>
                        <Col onClick={() => onClickSortByField('hair_color')}>Hair color</Col>
                        <Col onClick={() => onClickSortByField('homeworld')}>Home world</Col>
                        <Col onClick={() => onClickSortByField('created')}>Created</Col>
                    </Row>
                </TableHead>
                <TableBody>
                    {sortArr.map((item, index) =>
                        <Row key={index}>
                            <Col>{item.name}</Col>
                            <Col>{item.height}</Col>
                            <Col>{item.mass}</Col>
                            <Col>{item.hair_color}</Col>
                            <Col>{item.homeworld}</Col>
                            <Col>{item.created}</Col>
                        </Row>
                    )}
                </TableBody>
            </Table>
        </>
    )
}

const Table = styled.table`
  width: 100%;`

const TableHead = styled.thead`
  background: #aba9a9;
`

const TableBody = styled.tbody``

const Row = styled.tr``

const Col = styled.td``
