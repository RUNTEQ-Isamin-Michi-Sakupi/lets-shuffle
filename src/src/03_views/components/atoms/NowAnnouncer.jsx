import { useAnnouncer } from "../../../02_hook/useShareState";
import { useState,useEffect } from "react";

export default function nowAnnouncer () {

    // 登壇者リストを取得
    const { nameArray, allOpen, everyOpen, flipCard, isFlippedArray } = useAnnouncer();

    // 登壇者リストを定義
    const [ names, setNames ] = useState(nameArray);

    // 現在のIndexを定義
    const [nowIndex, setNowIndex] = useState(0);

    // ボタンから渡される値によって,nowIndexの値を変える

    // 次の登壇者の場合

    // 前の登壇者の場合


}