<template>
  <div>
    <div class="topfrom">
      <Form  style="width: 100%" :model="topform" label-position="top" >
      <Row type="flex" justify="center" align="middle" :gutter="20" class="code-row-bg">
          <Col :xs="24" :sm="12" :md="8" :lg="5">
          <FormItem label="性别">
            <Input v-model="topform.input1"></Input>
          </FormItem>
          </Col>
          <Col :xs="24" :sm="12" :md="8" :lg="5">
          <FormItem label="年龄">
            <Input v-model="topform.input1"></Input>
          </FormItem>
          </Col>
          <Col :xs="24" :sm="12" :md="8" :lg="5">
            <FormItem label="姓名">
             <Input v-model="topform.input1"></Input>
            </FormItem>
          </Col>
          <Col :xs="24" :sm="12" :md="8" :lg="5">
           <FormItem label="id">
             <Input v-model="topform.input1"></Input>
           </FormItem>
          </Col>
          <Col :xs="24" :sm="24" :md="16" :lg="4">
            <Button type="primary">查询</Button>
          </Col>
       </Row>
      </Form>
    </div>
    <div class="tabel">
      <Table border :columns="columns7" :data="data6"></Table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
      return {
          topform: {},
          columns7: [
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
                h('strong', params.row.name)
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
                }, 'View'),
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
                }, 'Delete')
              ]);
            }
          }
        ],
          data6: [
          {
            name: 'John Brown',
            age: 18,
            address: 'New York No. 1 Lake Park'
          },
          {
            name: 'Jim Green',
            age: 24,
            address: 'London No. 1 Lake Park'
          },
          {
            name: 'Joe Black',
            age: 30,
            address: 'Sydney No. 1 Lake Park'
          },
          {
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park'
          }
        ]
      }
  },
  methods: {
    show (index) {
      this.$Modal.info({
        title: 'User Info',
        content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
      })
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
  .tabel {
    padding: 20px;
    margin: 30px 10px;
    box-shadow: 5px 5px 5px rgba(0,0,0,0.5);
    border:1px solid gainsboro;
  }
</style>
