<?php
$table = array(
    "header" => array(
        "StudentID",
        "Lastname",
        "Middlename",
        "Firstname",
        "Course",
        "Section"
    ),
    "body" => array(
        array(
            "lastname" => "Lastname",
            "middlename" => "Middlename",
            "firstname" => "Firstname",
            "course" => "BSIT",
            "section" => "3C"
        ),
        array(
            "lastname" => "Lastname",
            "middlename" => "Middlename",
            "firstname" => "Firstname",
            "course" => "BSIT",
            "section" => "3C"
        ),
        array(
            "lastname" => "Lastname",
            "middlename" => "Middlename",
            "firstname" => "Firstname",
            "course" => "BSIT",
            "section" => "3C"
        ),
        array(
            "lastname" => "Lastname",
            "middlename" => "Middlename",
            "firstname" => "Firstname",
            "course" => "BSIT",
            "section" => "3C"
        ),
        array(
            "lastname" => "Lastname",
            "middlename" => "Middlename",
            "firstname" => "Firstname",
            "course" => "BSIT",
            "section" => "3C"
        ),
        array(
            "lastname" => "Lastname",
            "middlename" => "Middlename",
            "firstname" => "Firstname",
            "course" => "BSIT",
            "section" => "3C"
        ),
        array(
            "lastname" => "Lastname",
            "middlename" => "Middlename",
            "firstname" => "Firstname",
            "course" => "BSIT",
            "section" => "3C"
        ),
        array(
            "lastname" => "Lastname",
            "middlename" => "Middlename",
            "firstname" => "Firstname",
            "course" => "BSIT",
            "section" => "3C"
        ),
        array(
            "lastname" => "Lastname",
            "middlename" => "Middlename",
            "firstname" => "Firstname",
            "course" => "BSIT",
            "section" => "3C"
        ),
        array(
            "lastname" => "Lastname",
            "middlename" => "Middlename",
            "firstname" => "Firstname",
            "course" => "BSIT",
            "section" => "3C"
        )
    )
)

    ?>

<?php





?>
<table border="2">
    <thead>
        <?php
        for ($i = 0; $i < 6; $i++) {
            ?>
            <th>
                <?php
                echo $table['header'][$i];
                ?>
            </th>
        <?php } ?>
    </thead>
    <tbody>
    <?php for ($i = 0; $i < 10; $i++) {
            ?>
        <tr>
                <?php
                $firstname = $table["body"][$i]["firstname"];
                $lastname = $table["body"][$i]["lastname"];
                $middlename = $table["body"][$i]["middlename"];
                $course = $table["body"][$i]["course"];
                $section = $table["body"][$i]["section"];

                ?>
                <td><?php echo $i ?></td>
                <td><?php echo $lastname ?></td>
                <td><?php echo $middlename ?></td>
                <td><?php echo $firstname ?></td>
                <td><?php echo $course ?></td>
                <td><?php echo $section ?></td>

        </tr>
        
        <?php } ?>
    </tbody>



    <?php

    ?>

</table>