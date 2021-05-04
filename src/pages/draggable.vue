<template>
  <div class="container">
    <div class="onleft">
      <div class="col-3">
        <h3>组件UI</h3>
        <div class="formItem">
          <draggable
            class="dragArea list-group"
            v-model="list1"
            :group="{ name: 'people', pull: 'clone', put: false }"
            :clone="cloneDog"
            item-key="name"
          >
            <template #item="{ element }">
              <div class="list-group-item">{{ element.name }}</div>
            </template>
          </draggable>
        </div>
      </div>
    </div>
    <div class="onMine">
      <div class="pageBody">
        <draggable class="dragArea list-group" v-model="list2" group="people" item-key="name">
          <template #item="{ element }">
            <div
              :class="element.active?'active':''"
              class="dragItem"
              @click="onComSelected(element)"
            >
              <component :is="element.name" />
              <div class="copy" title="复制" v-if="element.active" @click="copyControl(element)">
                <em class="iconfont icon-fuzhi" />
              </div>
              <div class="delete" title="删除" v-if="element.active" @click="deleteControl(element)">
                <em class="iconfont icon-shanchu1" />
              </div>
            </div>
          </template>
          <!-- <div v-for="(items,index) in list2" :key="index">
            <components :is="items" key="index" />
          </div>-->
        </draggable>
      </div>
    </div>
    <div class="onRight">配置数据</div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
let idGlobal = 1;
export default {
  name: "App",
  display: "Clone",
  order: 2,
  components: {
    draggable,
  },
  data() {
    return {
      list1: window.librarys.uiconponent.UIname,
      list2: [],
    };
  },
  created() {
    // this.list1 = window.librarys.UIname;
  },
  mounted() {
    console.log(window.librarys);
  },
  methods: {
    onComSelected(items) {
      this.list2 = this.list2.map((item) => {
        if (item.id === items.id) {
          item.active = true;
        } else {
          item.active = false;
        }
        return item;
      });
      console.log(this.list2);
    },
    cloneDog(item) {
      return {
        id: idGlobal++,
        name: item.name,
        active: false,
      };
    },
    copyControl(item){
        this.list2.push({
            id: idGlobal++,
            name: item.name,
            active: false
        })
    },
    deleteControl(item){
        this.list2 = this.list2.filter(items => {
            if(item.id !== items.id){
                return item
            }
        })
    }
  },
};
</script>

<style lang="scss" scoped>
.container {
  @include center();
  height: 100%;
  .onleft {
    flex: 3;
    overflow-y: auto;
    padding: 10px;
    &::-webkit-scrollbar {
      width: 7px;
      height: 2px;
      background-color: transparent;
      transition: all 0.3s;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 8px;
      background-color: rgba(0, 0, 0, 0.2);
      transition: all 0.3s;
    }
    &::-webkit-scrollbar-track {
      border-radius: 8px;
      background-color: transparent;
    }
    &::-webkit-scrollbar-track-piece {
      background-color: transparent;
      border: none;
    }
    .formItem > div {
      margin-top: 20px;
      display: flex;
      flex-wrap: wrap;
      .list-group-item:hover {
        display: block;
        content: "";
        // background-color: yellow;
        width: 100px;
        height: 100px;
        box-sizing: border-box;
        border: 4px solid #1491fc;
        z-index: 4;
      }
      .list-group-item {
        width: 100px;
        height: 100px;
        box-sizing: border-box;
        border: 4px solid #000000;
        text-align: center;
        line-height: 100px;
        cursor: move;
        margin-right: 20px;
        margin-bottom: 20px;
      }
    }
  }
  .onMine {
    flex: 6;
    background: #eef2f8;
    overflow-y: auto;
    height: 100%;
    &::-webkit-scrollbar {
      width: 7px;
      height: 2px;
      background-color: transparent;
      transition: all 0.3s;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 8px;
      background-color: rgba(0, 0, 0, 0.2);
      transition: all 0.3s;
    }
    &::-webkit-scrollbar-track {
      border-radius: 8px;
      background-color: transparent;
    }
    &::-webkit-scrollbar-track-piece {
      background-color: transparent;
      border: none;
    }
    .pageBody {
      margin: 0 auto;
    }
    .list-group {
      width: 750px;
      min-height: 1587px;
      -ms-transform-origin-y: 0%;
      -webkit-transform-origin-y: 0%;
      transform: scale(0.75);
      margin: 0 auto;
      background: white;
      .dragItem {
        position: relative;
        cursor: move;
      }
      .active::after,
      .dragItem:hover::after {
        position: absolute;
        left: -4px;
        top: -4px;
        display: block;
        content: "";
        // background-color: yellow;
        width: 100%;
        height: 100%;
        box-sizing: content-box;
        border: 4px solid #1491fc;
        z-index: 4;
      }
      .delete {
        position: absolute;
        right: -64px;
        top: 60px;
        z-index: 2;
        width: 50px;
        height: 50px;
        line-height: 50px;
        overflow: hidden;
        cursor: pointer;
        background-color: white;
        border: 1px solid #ccc;
        text-align: center;

        .iconfont {
          line-height: 50px;
          font-size: 32px;
          color: #333;
        }
      }
      .copy {
        position: absolute;
        right: -64px;
        top: 2px;
        z-index: 2;
        width: 50px;
        height: 50px;
        line-height: 50px;
        overflow: hidden;
        cursor: pointer;
        background-color: white;
        border: 1px solid #ccc;
        text-align: center;
        .iconfont {
          line-height: 50px;
          font-size: 32px;
          color: #333;
          font-weight: bold;
        }
      }
    }
  }

  .onRight {
    flex: 3;
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 7px;
      height: 2px;
      background-color: transparent;
      transition: all 0.3s;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 8px;
      background-color: rgba(0, 0, 0, 0.2);
      transition: all 0.3s;
    }
    &::-webkit-scrollbar-track {
      border-radius: 8px;
      background-color: transparent;
    }
    &::-webkit-scrollbar-track-piece {
      background-color: transparent;
      border: none;
    }
  }
  > div {
    height: 100%;
  }
}
</style>
