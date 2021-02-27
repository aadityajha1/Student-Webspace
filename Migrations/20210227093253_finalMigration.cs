using Microsoft.EntityFrameworkCore.Migrations;

namespace Student_Webspace.Migrations
{
    public partial class finalMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "File",
                table: "SubmittedAssignments",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "IntakeId",
                table: "Modules",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Modules_IntakeId",
                table: "Modules",
                column: "IntakeId");

            migrationBuilder.AddForeignKey(
                name: "FK_Modules_Intakes_IntakeId",
                table: "Modules",
                column: "IntakeId",
                principalTable: "Intakes",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Modules_Intakes_IntakeId",
                table: "Modules");

            migrationBuilder.DropIndex(
                name: "IX_Modules_IntakeId",
                table: "Modules");

            migrationBuilder.DropColumn(
                name: "File",
                table: "SubmittedAssignments");

            migrationBuilder.DropColumn(
                name: "IntakeId",
                table: "Modules");
        }
    }
}
