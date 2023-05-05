<?php

    $fullname = $_POST['fullname'];
    $email = $_POST['email'];
    $mob_no = $_POST['mob_no'];
    $username = $_POST['username'];
    $password = $_POST['password'];

    $con = mysqli_connect("localhost", "root", "", "jeeva_guvi");

    if(mysqli_connect_error())
    {
        echo "<script>alert('Unable to connect to database');</script>";
        exit();
    }
    else
    {
        $stmt = $con->prepare("insert into users(fullname, email, mob_no, username, password) values(?, ?, ?, ?, ?)");
        $stmt->bind_param("sssss",$fullname, $email, $mob_no, $username, $password);
        $stmt->execute();
        echo"<script>
                window.location.assign('login.html');
                alert('Registration Successful')
            </script>";
        $stmt->close();
        $con->close();
    }
?>
