import React, { useEffect } from 'react';
import WriteWithLine from '@/components/WriteWithLine';

export default function FirstFloor() {
    useEffect(() => {
        // let scanner = new Instascan.Scanner({ video: document.getElementById('preview') });
        // scanner.addListener('scan', function (content) {
        //     if(content) {
        //         console.log(content);
        //         scanner.stop();
        //     }
        // });
        // Instascan.Camera.getCameras().then(function (cameras) {
        //     if (cameras.length > 0) {
        //         scanner.start(cameras[0]);
        //     } else {
        //         console.error('No cameras found.');
        //     }
        // }).catch(function (e) {
        //     console.error(e);
        // });
    }, []);
    return (
        <>
            <WriteWithLine words={["你好", "我爱你", "你能知道吗"]}/>
        </>
    )
}