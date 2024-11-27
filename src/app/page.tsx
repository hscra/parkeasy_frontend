import React from "react";
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Link from '@mui/joy/Link';
import Button from '@mui/joy/Button';

const HomePage: React.FC = () => {
  return (
    <Card variant="soft">
        <CardContent>
          <Typography level="title-md">Soft card</Typography>
          <Typography>Description of the card.</Typography>
        </CardContent>
        <CardActions>
          <Button>Click me</Button>
        </CardActions>
      </Card>
  );
};

export default HomePage;