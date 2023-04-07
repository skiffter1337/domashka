import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import s2 from '../../s1-main/App.module.css'
import s from './HW10.module.css'
import {Loader} from './Loader'
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";

//test
const HW10 = () => {

    const dispatch = useDispatch()
    const isLoading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)
    console.log(isLoading)
    const setLoading = () => {
        dispatch(loadingAC(isLoading))
        setTimeout(() => {
            dispatch(loadingAC(!isLoading))
        }, 1500)
    }


    return (
        <div id={'hw10'}>
            <div className={s2.hwTitle}>Homework #10</div>
            <hr className={s2.hr10_1}/>
            <div className={s.hw}>
                {isLoading ? (
                    <div id={'hw10-loading'}>
                        <Loader/>
                    </div>
                ) : (
                    <SuperButton
                        id={'hw10-button-start-loading'}
                        onClick={setLoading}
                    >
                        Set loading...
                    </SuperButton>
                )}
            </div>
            <hr className={s2.hr10_2}/>
        </div>
    )
}

export default HW10
