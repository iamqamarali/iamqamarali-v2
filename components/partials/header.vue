<script setup>

const { toggleSkin, isLight } = useSkin();

const changeSkin = () => {
    toggleSkin();
}

const { hasWhiteText } = useHeader();

onMounted(()=>{
    
})


</script>
<template>
    <header class="site-header" :class="{ 'text-white' : hasWhiteText}">
        <div class="header-inner-wrapper">
            <div class="container">
                <logo></logo>
                <div class="nav">
                    <NuxtLink to="/articles" class="nav-item">Articles</NuxtLink>    
                    <NuxtLink href="/work" class="nav-item">Work</NuxtLink>   
                    <NuxtLink href="/contact" class="nav-item">Contact</NuxtLink>   
                     
                    <div class="nav-item" v-if="false">


                        <svg version="1.0" 
                            @click.prevent="changeSkin"
                            v-if="isLight" 
   
                            class="svg-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            width="100.000000pt" height="100.000000pt" viewBox="0 0 100.000000 100.000000"
                            preserveAspectRatio="xMidYMid meet">

                            <g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)"
                            fill="#000000" stroke="none">
                            <path d="M303 861 c-3 -11 -13 -21 -24 -24 -10 -3 -19 -10 -19 -17 0 -7 9 -14
                            19 -17 11 -3 21 -13 24 -24 3 -10 10 -19 17 -19 7 0 14 9 17 19 3 11 13 21 24
                            24 10 3 19 10 19 17 0 7 -9 14 -19 17 -11 3 -21 13 -24 24 -7 25 -27 25 -34 0z"/>
                            <path d="M510 731 c-158 -48 -241 -200 -196 -356 35 -119 165 -205 291 -192
                            59 6 126 36 168 76 34 31 73 103 82 152 l6 35 -41 -4 c-70 -7 -129 16 -186 72
                            -56 57 -79 116 -72 185 4 44 -1 47 -52 32z"/>
                            <path d="M135 620 c-18 -20 -18 -21 3 -43 l22 -21 22 21 c21 22 21 23 3 43
                            -10 11 -21 20 -25 20 -4 0 -15 -9 -25 -20z"/>
                            </g>
                        </svg>
                        <svg version="1.0"  
                            @click.prevent="changeSkin"
                            v-else
                            class="svg-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            width="100.000000pt" height="100.000000pt" viewBox="0 0 100.000000 100.000000"
                            preserveAspectRatio="xMidYMid meet">
                            <g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)"
                            fill="#000000" stroke="none">
                            <path d="M430 861 c-46 -15 -85 -39 -116 -73 -54 -57 -69 -95 -69 -178 0 -87
                            14 -120 81 -192 26 -28 44 -57 44 -71 0 -13 7 -32 15 -43 8 -10 15 -37 15 -60
                            0 -55 52 -114 100 -114 48 0 100 59 100 114 0 23 7 50 15 60 8 11 15 30 15 43
                            0 14 18 43 44 71 67 72 81 105 81 192 0 54 -6 85 -19 110 -26 49 -74 98 -121
                            122 -43 22 -144 33 -185 19z m144 -23 c55 -16 138 -99 154 -154 27 -93 9 -163
                            -65 -245 -37 -42 -53 -68 -53 -87 0 -44 -16 -52 -110 -52 -94 0 -110 8 -110
                            52 0 19 -16 45 -53 87 -103 115 -104 235 -2 336 70 71 145 90 239 63z m6 -578
                            c0 -14 -7 -20 -22 -21 l-23 -2 23 -4 c15 -3 22 -10 20 -21 -3 -14 -16 -17 -78
                            -17 -63 0 -75 3 -78 18 -3 14 5 17 50 19 l53 2 -52 3 c-45 3 -53 7 -53 24 0
                            17 7 19 80 19 73 0 80 -2 80 -20z m-45 -100 c-3 -5 -19 -10 -35 -10 -16 0 -32
                            5 -35 10 -4 6 10 10 35 10 25 0 39 -4 35 -10z"/>
                            <path d="M548 791 c58 -20 86 -41 113 -86 13 -21 19 -25 19 -12 0 27 -71 91
                            -116 105 -63 19 -76 14 -16 -7z"/>
                            <path d="M692 630 c0 -14 2 -19 5 -12 2 6 2 18 0 25 -3 6 -5 1 -5 -13z"/>
                            <path d="M444 556 c-3 -13 0 -34 6 -46 18 -33 4 -36 -24 -4 -20 24 -27 27 -38
                            16 -16 -16 -1 -42 35 -60 20 -10 27 -22 31 -55 10 -78 15 -92 11 -32 -3 33 -6
                            69 -7 80 -3 17 3 20 42 20 39 0 45 -3 42 -20 -1 -11 -4 -47 -7 -80 -4 -60 1
                            -46 11 32 4 33 11 45 31 55 36 18 51 44 35 60 -11 11 -18 8 -38 -16 -28 -32
                            -42 -29 -24 4 14 27 5 70 -15 70 -18 0 -29 -40 -20 -69 5 -17 2 -21 -15 -21
                            -17 0 -19 4 -14 24 8 32 -3 66 -21 66 -8 0 -17 -11 -21 -24z m36 -21 c0 -13
                            -4 -27 -10 -30 -11 -7 -25 39 -15 55 10 16 25 2 25 -25z m66 -10 c-4 -14 -11
                            -23 -16 -20 -11 7 -13 48 -3 59 13 13 26 -13 19 -39z m-121 -27 c9 -14 11 -24
                            5 -26 -14 -5 -40 17 -40 34 0 21 17 17 35 -8z m185 8 c0 -17 -26 -39 -40 -34
                            -6 2 -4 12 5 26 18 25 35 29 35 8z"/>
                            <path d="M190 781 c0 -9 30 -24 36 -18 2 1 -6 8 -16 15 -11 7 -20 8 -20 3z"/>
                            <path d="M786 774 c-11 -8 -16 -14 -10 -14 13 0 39 18 34 24 -3 2 -14 -2 -24
                            -10z"/>
                            <path d="M165 690 c11 -5 27 -9 35 -9 9 0 8 4 -5 9 -11 5 -27 9 -35 9 -9 0 -8
                            -4 5 -9z"/>
                            <path d="M805 690 c-13 -5 -14 -9 -5 -9 8 0 24 4 35 9 13 5 14 9 5 9 -8 0 -24
                            -4 -35 -9z"/>
                            <path d="M153 603 c9 -2 25 -2 35 0 9 3 1 5 -18 5 -19 0 -27 -2 -17 -5z"/>
                            <path d="M813 603 c9 -2 25 -2 35 0 9 3 1 5 -18 5 -19 0 -27 -2 -17 -5z"/>
                            <path d="M170 520 c-18 -12 -2 -12 25 0 13 6 15 9 5 9 -8 0 -22 -4 -30 -9z"/>
                            <path d="M805 520 c27 -12 43 -12 25 0 -8 5 -22 9 -30 9 -10 0 -8 -3 5 -9z"/>
                            <path d="M209 439 c-23 -19 -23 -20 -2 -10 12 6 25 16 28 21 10 16 -1 12 -26
                            -11z"/>
                            <path d="M764 451 c4 -6 16 -16 28 -22 15 -8 18 -8 14 0 -4 6 -16 16 -28 22
                            -15 8 -18 8 -14 0z"/>
                            </g>
                        </svg>

                    </div>
                </div>
            </div>
        </div>        
    </header>
</template>

