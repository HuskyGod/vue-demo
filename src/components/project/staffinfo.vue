<template>
  <div style="padding: 50px;">
    <div class="topfrom">
      <Form  style="width: 100%" :model="topform" label-position="top" >
      <Row type="flex" justify="center" align="middle" :gutter="20" class="code-row-bg">
          <Col :xs="24" :sm="12" :md="8" :lg="5">
          <FormItem label="性别">
            <Input v-model="topform.sex"></Input>
          </FormItem>
          </Col>
          <Col :xs="24" :sm="12" :md="8" :lg="5">
          <FormItem label="年龄">
            <Input v-model="topform.age"></Input>
          </FormItem>
          </Col>
          <Col :xs="24" :sm="12" :md="8" :lg="5">
            <FormItem label="姓名">
             <Input v-model="topform.username"></Input>
            </FormItem>
          </Col>
          <Col :xs="24" :sm="12" :md="8" :lg="5">
           <FormItem label="地址">
             <Input v-model="topform.addr"></Input>
           </FormItem>
          </Col>
          <Col :xs="24" :sm="24" :md="16" :lg="4">
            <Button type="primary">查询</Button>
          </Col>
       </Row>
      </Form>
    </div>
    <div class="tabel">
      <Table border :columns="columns" :data="data"></Table>
    </div>
    <Modal v-model="showbox.open" width="500">
      <p slot="header" style="color: deepskyblue;text-align:center">
        <Icon type="information-circled"></Icon>
        <span>员工信息</span>
      </p>
      <div class="info_box">
        <p><label>用户名:</label><span>{{showbox.form.name}}</span></p>
        <p><label>年龄:</label><span>{{showbox.form.age}}</span></p>
        <p><label>地址:</label><span>{{showbox.form.address}}</span></p>
        <p><label>兴趣爱好:</label><span>{{showbox.form.hobby}}</span></p>
        <p style="word-wrap: break-word;"><label style="display: inline-block;">自我介绍:</label><span >{{showbox.form.introduce}}</span></p>
      </div>
      <div slot="footer">
        <Button type="info" @click="close" >取消</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
export default {
  data() {
      return {
          showbox: {
            open: false,
            form: {}
          },
          topform: {},
          columns: [
          {
            title: 'Name',
            key: 'name',
            render: (h, params) => {
              return h('div', [
                h('Icon', {
                  props: {
                    type: 'person'
                  }
                }),
                h('span', params.row.name)
              ]);
            }
          },
          {
            title: 'Age',
            key: 'age'
          },
          {
            title: 'Address',
            key: 'address'
          },
          {
            title: 'Action',
            key: 'action',
            width: 150,
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.show(params.index)
                    }
                  }
                }, '展示'),
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.remove(params.index)
                    }
                  }
                }, '删除')
              ]);
            }
          }
        ],
          data: [
          {
            name: '张嘉鑫',
            age: 18,
            address: '深圳市龙岗区大康新塘村东区14号',
            hobby: '没有',
            introduce: "123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123"
          }
        ]
      }
  },
  methods: {
    show (index) {
      this.showbox = {
          open: true,
          form: this.data[index]
      };
    },
    close () {
      this.showbox = {
        ...this.showbox,
        open: false
      }
    },
    remove (index) {
      this.data6.splice(index, 1);
    }
  }
}
</script>
<style scoped>
  .topfrom{
    padding: 30px;
    margin: 10px;
    box-shadow: 5px 5px 5px rgba(0,0,0,0.5);
    border:1px solid gainsboro;
    width: 100%;
  }
  .info_box p{
    margin: 10px;
    font-size: 15px;
  }
  .info_box p label{
    color: goldenrod;
    margin-right: 10px;
  }
  .info_box p span{
    color: deepskyblue;
  }
  .tabel {
    padding: 20px;
    margin: 30px 10px;
    box-shadow: 5px 5px 5px rgba(0,0,0,0.5);
    border:1px solid gainsboro;
  }
</style>
