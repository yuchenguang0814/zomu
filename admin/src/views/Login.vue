<template>
  <div>
    <Particles id='tsparticles' :particlesInit='particlesInit' :particlesLoaded='particlesLoaded' :options='options' />
  </div>
  <div class="formContainer">
    <h3>后台管理系统-Zomukikai</h3>
    <el-form ref="loginFormRef" :model="loginForm" status-icon :rules="loginRules" label-width="80px" class="loginForm">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="loginForm.username" type="username" autocomplete="off" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="loginForm.password" type="password" autocomplete="off" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm()">登录</el-button>
        <el-button @click="resetForm()">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { reactive, ref, getCurrentInstance} from 'vue'
import { loadFull } from 'tsparticles'
import axios from 'axios'
import router from '@/router'
import { useStore } from 'vuex';
const store = useStore()
const { proxy } = getCurrentInstance()
const loginForm = reactive({
  username: '',
  password: ''
})
const loginFormRef = ref()

const loginRules = reactive({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' }
  ],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
})
// 提交登录
const submitForm = () => {
  loginFormRef.value.validate((valid) => {
    if (valid) {
      axios.post('/admin/login',loginForm).then(res => {
        const data = res.data.data
        if (data.code !== 200) return proxy.$message.error(data.message)
        proxy.$message.success(data.message)
        store.commit('changeUserInfo',data.data[0])
        router.push('/')
      })
    }
  })
}
// 重置表单
const resetForm = () => {
  loginFormRef.value.resetFields()
}
const options = {
  autoPlay: true,
  background: {
    color: {
      value: '#000000'
    },
    image: '',
    position: '50% 50%',
    repeat: 'no-repeat',
    size: 'cover',
    opacity: 1
  },
  backgroundMask: {
    composite: 'destination-out',
    cover: {
      color: {
        value: '#fff'
      },
      opacity: 1
    },
    enable: false
  },
  fullScreen: {
    enable: true,
    zIndex: 0
  },
  detectRetina: true,
  duration: 0,
  fpsLimit: 120,
  interactivity: {
    detectsOn: 'window',
    events: {
      onClick: {
        enable: true,
        mode: 'push'
      },
      onDiv: {
        selectors: [],
        enable: false,
        mode: [],
        type: 'circle'
      },
      onHover: {
        enable: false,
        mode: 'repulse',
        parallax: {
          enable: false,
          force: 2,
          smooth: 10
        }
      },
      resize: true
    },
    modes: {
      attract: {
        distance: 200,
        duration: 0.4,
        easing: 'ease-out-quad',
        factor: 1,
        maxSpeed: 50,
        speed: 1
      },
      bounce: {
        distance: 200
      },
      bubble: {
        distance: 400,
        duration: 2,
        mix: false,
        opacity: 0.8,
        size: 40
      },
      connect: {
        distance: 80,
        links: {
          opacity: 0.5
        },
        radius: 60
      },
      grab: {
        distance: 400,
        links: {
          blink: false,
          consent: false,
          opacity: 1
        }
      },
      light: {
        area: {
          gradient: {
            start: {
              value: '#ffffff'
            },
            stop: {
              value: '#000000'
            }
          },
          radius: 1000
        },
        shadow: {
          color: {
            value: '#000000'
          },
          length: 2000
        }
      },
      push: {
        default: true,
        groups: ['z5000', 'z7500', 'z2500', 'z1000'],
        quantity: 4
      },
      remove: {
        quantity: 2
      },
      repulse: {
        distance: 200,
        duration: 0.4,
        factor: 100,
        speed: 1,
        maxSpeed: 50,
        easing: 'ease-out-quad'
      },
      slow: {
        factor: 3,
        radius: 200
      },
      trail: {
        delay: 1,
        pauseOnStop: false,
        quantity: 1
      }
    }
  },
  manualParticles: [],
  motion: {
    disable: false,
    reduce: {
      factor: 4,
      value: true
    }
  },
  particles: {
    bounce: {
      horizontal: {
        random: {
          enable: false,
          minimumValue: 0.1
        },
        value: 1
      },
      vertical: {
        random: {
          enable: false,
          minimumValue: 0.1
        },
        value: 1
      }
    },
    collisions: {
      bounce: {
        horizontal: {
          random: {
            enable: false,
            minimumValue: 0.1
          },
          value: 1
        },
        vertical: {
          random: {
            enable: false,
            minimumValue: 0.1
          },
          value: 1
        }
      },
      enable: false,
      mode: 'bounce',
      overlap: {
        enable: true,
        retries: 0
      }
    },
    color: {
      value: '#fff',
      animation: {
        h: {
          count: 0,
          enable: false,
          offset: 0,
          speed: 20,
          sync: true
        },
        s: {
          count: 0,
          enable: false,
          offset: 0,
          speed: 1,
          sync: true
        },
        l: {
          count: 0,
          enable: false,
          offset: 0,
          speed: 1,
          sync: true
        }
      }
    },
    destroy: {
      mode: 'none',
      split: {
        count: 1,
        factor: {
          random: {
            enable: false,
            minimumValue: 0
          },
          value: 3
        },
        rate: {
          random: {
            enable: false,
            minimumValue: 0
          },
          value: {
            min: 4,
            max: 9
          }
        },
        sizeOffset: true
      }
    },
    gradient: [],
    groups: {
      z5000: {
        number: {
          value: 70
        },
        zIndex: {
          value: 50
        }
      },
      z7500: {
        number: {
          value: 30
        },
        zIndex: {
          value: 75
        }
      },
      z2500: {
        number: {
          value: 50
        },
        zIndex: {
          value: 25
        }
      },
      z1000: {
        number: {
          value: 40
        },
        zIndex: {
          value: 10
        }
      }
    },
    life: {
      count: 0,
      delay: {
        random: {
          enable: false,
          minimumValue: 0
        },
        value: 0,
        sync: false
      },
      duration: {
        random: {
          enable: false,
          minimumValue: 0.0001
        },
        value: 0,
        sync: false
      }
    },
    links: {
      blink: false,
      color: {
        value: '#ffffff'
      },
      consent: false,
      distance: 100,
      enable: false,
      frequency: 1,
      opacity: 0.4,
      shadow: {
        blur: 5,
        color: {
          value: '#00ff00'
        },
        enable: false
      },
      triangles: {
        enable: false,
        frequency: 1
      },
      width: 1,
      warp: false
    },
    move: {
      angle: {
        offset: 0,
        value: 10
      },
      attract: {
        distance: 200,
        enable: false,
        rotate: {
          x: 600,
          y: 1200
        }
      },
      decay: 0,
      distance: {},
      direction: 'right',
      drift: 0,
      enable: true,
      gravity: {
        acceleration: 9.81,
        enable: false,
        inverse: false,
        maxSpeed: 50
      },
      path: {
        clamp: true,
        delay: {
          random: {
            enable: false,
            minimumValue: 0
          },
          value: 0
        },
        enable: false,
        options: {}
      },
      outModes: {
        default: 'out',
        bottom: 'out',
        left: 'out',
        right: 'out',
        top: 'out'
      },
      random: false,
      size: false,
      speed: 5,
      spin: {
        acceleration: 0,
        enable: false
      },
      straight: false,
      trail: {
        enable: false,
        length: 10,
        fillColor: {
          value: '#000000'
        }
      },
      vibrate: false,
      warp: false
    },
    number: {
      density: {
        enable: false,
        area: 800,
        factor: 1000
      },
      limit: 0,
      value: 200
    },
    opacity: {
      random: {
        enable: false,
        minimumValue: 0.1
      },
      value: 1,
      animation: {
        count: 0,
        enable: false,
        speed: 3,
        sync: false,
        destroy: 'none',
        startValue: 'random',
        minimumValue: 0.1
      }
    },
    orbit: {
      animation: {
        count: 0,
        enable: false,
        speed: 1,
        sync: false
      },
      enable: false,
      opacity: 1,
      rotation: {
        random: {
          enable: false,
          minimumValue: 0
        },
        value: 45
      },
      width: 1
    },
    reduceDuplicates: false,
    repulse: {
      random: {
        enable: false,
        minimumValue: 0
      },
      value: 0,
      enabled: false,
      distance: 1,
      duration: 1,
      factor: 1,
      speed: 1
    },
    roll: {
      darken: {
        enable: false,
        value: 0
      },
      enable: false,
      enlighten: {
        enable: false,
        value: 0
      },
      mode: 'vertical',
      speed: 25
    },
    rotate: {
      random: {
        enable: false,
        minimumValue: 0
      },
      value: 0,
      animation: {
        enable: false,
        speed: 0,
        sync: false
      },
      direction: 'clockwise',
      path: false
    },
    shadow: {
      blur: 0,
      color: {
        value: '#000000'
      },
      enable: false,
      offset: {
        x: 0,
        y: 0
      }
    },
    shape: {
      options: {},
      type: 'circle'
    },
    size: {
      random: {
        enable: false,
        minimumValue: 1
      },
      value: 3,
      animation: {
        count: 0,
        enable: false,
        speed: 5,
        sync: false,
        destroy: 'none',
        startValue: 'random'
      }
    },
    stroke: {
      width: 0
    },
    tilt: {
      random: {
        enable: false,
        minimumValue: 0
      },
      value: 0,
      animation: {
        enable: false,
        speed: 0,
        sync: false
      },
      direction: 'clockwise',
      enable: false
    },
    twinkle: {
      lines: {
        enable: false,
        frequency: 0.05,
        opacity: 1
      },
      particles: {
        enable: false,
        frequency: 0.05,
        opacity: 1
      }
    },
    wobble: {
      distance: 5,
      enable: false,
      speed: 50
    },
    zIndex: {
      random: {
        enable: false,
        minimumValue: 0
      },
      value: 5,
      opacityRate: 0.5,
      sizeRate: 1,
      velocityRate: 1
    }
  },
  pauseOnBlur: true,
  pauseOnOutsideViewport: true,
  responsive: [],
  style: {},
  themes: [],
  zLayers: 100,
  emitters: {
    autoPlay: true,
    fill: true,
    life: {
      wait: false
    },
    rate: {
      quantity: 1,
      delay: 7
    },
    shape: 'square',
    startCount: 0,
    size: {
      mode: 'percent',
      height: 0,
      width: 0
    },
    position: {
      x: -5,
      y: 55
    }
  }
}
const particlesInit = async (engine) => {
  await loadFull(engine)
}

const particlesLoaded = async (container) => {
  console.log('Particles container loaded', container)
}
</script>
<style lang="scss" scoped>
  .formContainer {
    width: 500px;
    height: 300px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    background: rgba(255, 255, 255, 0.2);
    color: #fff;
    text-align: center;
    padding: 20px;
    border-radius: 20px;
  }
  .formContainer h3 {
    font-size: 30px;
    margin-bottom: 30px;
  }
  ::v-deep .el-form-item__label {
    color: #fff;
  }
</style>
