import * as React from 'react';

import { Text, Card, Button, Icon } from 'react-native-elements';
import { NavigationInjectedProps, withNavigation } from 'react-navigation'


interface Props extends NavigationInjectedProps {
    blog: {
        id: number,
        title: string,
        body: string,
        firstname: string,
        lastname: string,
        _created: Date
    };
}

interface State { }

class BlogPreviewCard extends React.Component<Props, State> {



    render() {
        const { id, title, firstname, lastname } = this.props.blog;
        return (

            <Card
                title={title}
                image={{ uri: 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80' }}>
                <Text style={{ marginBottom: 10 }}>{`Written by: Kyle Phillips`} </Text>
                <Button
                    icon={<Icon name='code' color='#ffffff' />}
                    buttonStyle={{ backgroundColor: '#AE3CD7', borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                    title='Read This Blog'
                    onPress={() => this.props.navigation.navigate('SingleBlog', {
                        id
                    })}
                />
            </Card>
        )
    }
}
export default withNavigation(BlogPreviewCard)