<template>
  <section id="stack-part" class="sort-center pt-5" style="height: 100%;">
            <div class="h1 bg-dark p-4 text-white w-100 text-center text-shadow-2-gray ml-auto mr-auto">
                Skill Stack
            </div>
            <table class="table w-75 mt-5 ml-auto mr-auto">
                <thead>
                    <tr>
                        <th scope="col">분야</th>
                        <th scope="col">분류</th>
                        <th scope="col">스택</th>
                        <th scope="col">Level</th>
                        <th scope="col">근거</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row" rowspan="10" class="align-middle">WEB</th>
                        <td rowspan="4" class="align-middle">Front End</td>
                        <td>HTML/CSS</td>
                        <td>⭐⭐⭐⭐⭐</td>
                        <td>웹페이지 클론코딩 가능</td>
                    </tr>
                    <tr>
                        <td>Bootstrap</td>
                        <td>⭐⭐⭐</td>
                        <td>Bootstrap 5 기준으로 Document를 참고하여 개발 가능.</td>
                    </tr>
                    <tr>
                        <td>Vue.js</td>
                        <td>⭐⭐⭐⭐</td>
                        <td>다양한 Web Project 개발 진행</td>
                    </tr>
                    <tr>
                        <td>React.js</td>
                        <td>학습 예정</td>
                        <td>다양한 Web Project 개발 진행</td>
                    </tr>

                    <!-- Back End Part -->
                    <tr>
                        <td rowspan="3" class="align-middle">Back End</td>
                        <td>Node.js</td>
                        <td>⭐⭐⭐⭐</td>
                        <td>노드를 활용한 MQTT Client Server, 비동기 통신/REST/WEB Server 운영 개발</td>
                    </tr>
                    <tr>
                        <td>MySQL</td>
                        <td>⭐⭐⭐⭐</td>
                        <td>활용에 능숙함. Database 설계 가능</td>
                    </tr>
                    <tr>
                        <td>MongoDB</td>
                        <td>⭐⭐</td>
                        <td>MongoDB Node.js + MongoDB 프로젝트 경험</td>
                    </tr>

                    <!-- DevOps Part -->
                    <tr>
                        <td class="align-middle" rowspan="3">DevOps</td>
                        <td>AWS</td>
                        <td>⭐⭐⭐</td>
                        <td>EC2, RDS, S3 활용경험</td>
                    </tr>
                    <tr>
                        <td>Nginx</td>
                        <td>⭐⭐</td>
                        <td>웹서버 운영</td>
                    </tr>
                    <tr>
                        <td>Jenkins</td>
                        <td>⭐</td>
                        <td>배포서버 운영</td>
                    </tr>
                    
                </tbody>
            </table>

            <table class="table w-75 mt-5 ml-auto mr-auto">
                <thead>
                    <tr>
                        <th scope="col">분야</th>
                        <th scope="col">분류</th>
                        <th scope="col">스택</th>
                        <th scope="col">Level</th>
                        <th scope="col">근거</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row" rowspan="12" class="align-middle">Embedded</th>
                        <td rowspan="3" class="align-middle">Firmware</td>
                        <td>ARM</td>
                        <td>⭐⭐⭐⭐⭐</td>
                        <td>Cortex-M3 / A72 아키텍쳐 이해 및 개발 경험</td>
                    </tr>
                    <tr>
                        <td>Raspberry Pi</td>
                        <td>⭐⭐⭐⭐⭐</td>
                        <td>Raspberry Pi에서 C와 Python으로 Firmware 개발</td>
                    </tr>
                    <tr>
                        <td>NUCLEO-F103RB</td>
                        <td>⭐⭐⭐⭐⭐</td>
                        <td>ST사 보드 개발(Cortex-M3)</td>
                    </tr>
                    <tr>
                        <td rowspan="1" class="align-middle">RTOS</td>
                        <td>FreeRTOS</td>
                        <td>⭐⭐⭐⭐⭐</td>
                        <td>Thread Programming / 모듈 제어 가능</td>
                    </tr>
                    <tr>
                        <td rowspan="3" class="align-middle">장비</td>
                        <td>회로도 이해</td>
                        <td>⭐⭐⭐⭐⭐</td>
                        <td>Datasheet / Schematic 분석 가능</td>
                    </tr>
                    <tr>
                        <td>기본 계측</td>
                        <td>⭐⭐⭐⭐⭐</td>
                        <td>멀티미터 / 오실로스코프 경험</td>
                    </tr>
                    <tr>
                        <td>Debugger</td>
                        <td>⭐⭐⭐⭐⭐</td>
                        <td>ST-Link / V2, IAR 환경에서 디버깅</td>
                    </tr>
                    <tr>
                        <td rowspan="2" class="align-middle">Device Driver</td>
                        <td>Linux Kernel</td>
                        <td>⭐⭐⭐⭐⭐</td>
                        <td>자유롭게 사용 가능, Linux 커널 분석 경험</td>
                    </tr>
                    <tr>
                        <td>Linux Device Driver</td>
                        <td>⭐⭐⭐⭐⭐</td>
                        <td>Device Tree / 캐릭터 Device Driver 개발 경험</td>
                    </tr>
                    <tr>
                        <td rowspan="1" class="align-middle">Embedded UI</td>
                        <td>Qt</td>
                        <td>⭐⭐⭐⭐⭐</td>
                        <td>C++ 대신, Python으로 개발 (PyQt)</td>
                    </tr>
                    <tr>
                        <td rowspan="2" class="align-middle">IoT</td>
                        <td>Connectivity</td>
                        <td>⭐⭐⭐⭐⭐</td>
                        <td>MQTT, LoRa, BLE, wifi</td>
                    </tr>
                    <tr>
                        <td>Security</td>
                        <td>⭐⭐⭐⭐⭐</td>
                        <td>SSL/TLS</td>
                    </tr>

                </tbody>
            </table>
        </section>
</template>

<script>
export default {

}
</script>

<style>

</style>