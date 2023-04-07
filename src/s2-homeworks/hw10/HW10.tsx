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
    const isLoading = useSelector<AppStoreType, {isLoading: boolean}>(state => state.loading)
    console.log(isLoading.isLoading)
    const setLoading = () => {
        dispatch(loadingAC(isLoading.isLoading))
        setTimeout(() => {
            dispatch(loadingAC(!isLoading.isLoading))
        }, 1500)
    }


    return (
        <div id={'hw10'}>
            <div className={s2.hwTitle}>Homework #10</div>
            <hr className={s2.hr10_1}/>
            <div className={s.hw}>
                {isLoading.isLoading ? (
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
