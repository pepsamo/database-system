import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import CardDetail from '../card-detail/CardDetail.component';

export const CardOverview = ({ user }) => {
    const { id, name, lastname } = user;
    return (
        <div>
            <Card inverse>
                <CardImg width="100%" src= {`https://picsum.photos/id/${id}/400/400`} alt= "Photo image" />
                <CardImgOverlay>
                    <CardTitle>{ name } { lastname }</CardTitle>
                    <CardDetail user= { user }>
                        Scopri di più
                    </CardDetail>
                </CardImgOverlay>
            </Card>
        </div>
    );
};