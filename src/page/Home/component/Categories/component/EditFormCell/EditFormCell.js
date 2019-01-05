import React from 'react'
import { Form,Input } from 'antd'
import { EditableContext } from '../EditFormRow/EditFormRow'
import { post } from '../../../../../../http/http'

const FormItem = Form.Item

class EditTableCell extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            editing: false
        }
    }

    componentDidMount(){
        if (this.props.editable) {
            document.addEventListener('click', this.handleClickOutside, true);
          }
    }

    componentWillUnmount() {
        if (this.props.editable) {
            document.removeEventListener('click', this.handleClickOutside, true);
          }
    }

    handleClickOutside = (e) => {
        const { editing } = this.state;
        if (editing && this.cell !== e.target && !this.cell.contains(e.target)) {
            this.save()
        }
    }

    save = () => {
        const { handleSave,record } = this.props
        this.form.validateFields((error, values) => {
            if (error) {
              return;
            }
            this.toggleEdit()
            handleSave({ ...record, ...values })
          })
    }

    toggleEdit = () => {
        const editing = !this.state.editing
        this.setState({ editing }, () => {
          if (editing) {
            this.input.focus();
          }
        })
      }

    render() {
        const { editing } = this.state
        const {
        editable,
        dataIndex,
        title,
        record,
        index,
        handleSave,
        ...restProps
        } = this.props
        return (
           <td ref={node => (this.cell = node)} {...restProps}>
                {editable ? (
                    <EditableContext.Consumer>
                        {form => {
                            this.form = form
                            return (editing ? (
                                <FormItem style={{ margin: 0 }}>
                                    {form.getFieldDecorator(dataIndex, {
                                    rules: [{
                                        required: true,
                                        message: `${title} is required.`,
                                    }],
                                    initialValue: record[dataIndex],
                                    })(
                                    <Input
                                        ref={node => (this.input = node)}
                                        onPressEnter={this.save}
                                    />
                                    )}
                                </FormItem>
                            ) : (
                                <div
                                  className="editable-cell-value-wrap"
                                  style={{ paddingRight: 24 }}
                                  onClick={this.toggleEdit}
                                >
                                  {restProps.children}
                                </div>
                              )
                            )
                        }}
                    </EditableContext.Consumer>
                ) : restProps.children}
           </td>
        )
    }
}



export const EditFormCell = Form.create()(EditTableCell)